# Vercel to cPanel Migration Guide (Party Lounges)

This guide is tailored to the current local codebase.

It covers:
- Moving hosting from Vercel to cPanel
- Keeping GitHub as source of truth
- Auto-deploying from the development branch
- Preserving PHP email sending with Zoho SMTP

Verified on 14 April 2026:
- Current local branch: form_submissionm
- Auto-deploy branch in workflow: development

---

## 1. Current Repo Facts (Already in Place)

- Frontend is Vite + React.
- Production output is generated in dist after npm run build.
- SPA fallback is handled by public/.htaccess (copied into dist during build).
- Contact form posts to /send-email.php.
- public/send-email.php requires Composer autoload at:
  - dirname(__DIR__) . '/vendor/autoload.php'
- Existing workflow file:
  - .github/workflows/deploy.yml
- Existing trigger in that file:
  - on push to development branch.

This means the branch requirement is already configured in code.

---

## 2. Pre-Migration Checklist

Complete these before DNS cutover:

1. Confirm development is the branch you want to auto-deploy.
2. Confirm cPanel account has:
   - SSH access enabled
   - Git access allowed
   - Enough storage for dist and vendor
3. Confirm domain is already added in cPanel.
4. Keep Vercel live until cPanel testing is complete.

---

## 3. cPanel Directory Layout (Important for Email)

Because send-email.php loads vendor/autoload.php from one level above web root, use this layout:

- /home/CPANEL_USER/public_html/   (deployed dist files)
- /home/CPANEL_USER/vendor/        (Composer vendor folder)

Why:
- send-email.php will be at /home/CPANEL_USER/public_html/send-email.php
- dirname(__DIR__) becomes /home/CPANEL_USER
- so PHP expects /home/CPANEL_USER/vendor/autoload.php

If vendor is not there, email sending will fail.

---

## 4. cPanel Setup Steps

### 4.1 Enable SSH in cPanel

1. Log into cPanel.
2. Open SSH Access.
3. Enable shell access for the account.

### 4.2 Add SSH key for GitHub Actions deployment

1. In cPanel, open Terminal.
2. Run:

   ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/id_ed25519_github_actions

3. Add public key to authorized keys:

   cat ~/.ssh/id_ed25519_github_actions.pub >> ~/.ssh/authorized_keys
   chmod 600 ~/.ssh/authorized_keys

4. Copy private key content for GitHub secret:

   cat ~/.ssh/id_ed25519_github_actions

5. Save host, username, ssh port (usually 22).

---

## 5. GitHub Secrets Setup

In GitHub repository:
Settings -> Secrets and variables -> Actions -> New repository secret

Create these secrets (matching .github/workflows/deploy.yml):

- CPANEL_HOST
- CPANEL_USER
- CPANEL_PORT
- CPANEL_SSH_KEY

Value notes:
- CPANEL_HOST: server hostname or IP
- CPANEL_USER: cPanel username
- CPANEL_PORT: usually 22
- CPANEL_SSH_KEY: full private key from cPanel including BEGIN/END lines

---

## 6. Ensure Development Branch Auto-Deploy

Your current workflow already listens to development:

- File: .github/workflows/deploy.yml
- Trigger block:
  on:
    push:
      branches: [development]

What this means:
- Every push to development starts a build and deploy job automatically.
- Pushes to other branches do not deploy.

Verification:
1. Push a small commit to development.
2. Open GitHub Actions tab.
3. Confirm workflow "Deploy to cPanel" starts automatically.

### 6.1 If You Are Currently on the Wrong Branch

If your local changes are on form_submissionm (or any other non-development branch), do this:

1. Commit your current branch work:

   git add .
   git commit -m "Your message"

2. Switch to development and update it:

   git checkout development
   git pull origin development

3. Bring your changes into development (choose one):

   Option A (merge full branch):
   git merge form_submissionm

   Option B (single commit cherry-pick):
   git log form_submissionm --oneline
   git cherry-pick <commit_sha>

4. Push development to trigger auto-deploy:

   git push origin development

5. Confirm deployment started in GitHub Actions.

6. If merge conflicts happen:
   - resolve conflicts locally
   - git add .
   - git commit
   - git push origin development

Important:
- Pushing form_submissionm will not deploy with the current workflow.
- Only pushes to development trigger cPanel deployment.

---

## 7. First Deployment Procedure

### 7.1 Trigger deployment from development

1. Merge latest changes into development.
2. Push development.
3. Wait for GitHub Actions run success.

Current workflow deploys dist to:
- /home/CPANEL_USER/public_html/

### 7.2 Upload vendor folder to expected server location

One-time minimum step before testing email:

1. From local project root, upload vendor to cPanel home directory (not inside public_html).
2. Ensure resulting path is:
   - /home/CPANEL_USER/vendor/autoload.php

If you have SSH + rsync/scp available locally, use:

- scp -r vendor CPANEL_USER@CPANEL_HOST:/home/CPANEL_USER/

Alternative:
- Zip vendor locally, upload in cPanel File Manager, extract into /home/CPANEL_USER/

---

## 8. Configure SMTP Environment Variables on cPanel

send-email.php reads:
- ZOHO_SMTP_USER
- ZOHO_SMTP_PASSWORD

Recommended cPanel-compatible approach:

1. In public_html/.htaccess add SetEnv entries:

   SetEnv ZOHO_SMTP_USER hello@partylounges.com
   SetEnv ZOHO_SMTP_PASSWORD YOUR_ZOHO_APP_PASSWORD

2. Save file.
3. Test form submission.

Security note:
- Restrict file permissions.
- Rotate app password immediately if exposed.

---

## 9. Post-Deployment Validation

Run this checklist on cPanel URL:

1. Home page loads.
2. Direct route test works (for example /contact) without 404.
3. Contact form submit returns success toast.
4. Email appears in Zoho inbox.
5. If failure, inspect cPanel error logs for request id from API response.

---

## 10. DNS Cutover from Vercel to cPanel

Do this only after full validation:

1. In domain DNS, update A record to cPanel server IP.
2. Keep TTL low during cutover (for example 300 seconds).
3. Wait for propagation.
4. Re-test form and routes on live domain.
5. Remove Vercel deployment after stable verification.

---

## 11. Recommended Hardening After Migration

1. Add health checks for send-email.php.
2. Add rate limiting / bot protection on form endpoint.
3. Add server-side input validation and logging retention policy.
4. Move SMTP password out of .htaccess if your host provides a secure env manager.
5. Add a recurring check that vendor/autoload.php exists after deployments.

---

## 12. Quick Rollback Plan

If cPanel production fails:

1. Re-point DNS back to Vercel temporarily.
2. Fix cPanel issue (logs + GitHub Actions output).
3. Re-deploy from development.
4. Switch DNS again after validation.

---

## 13. Ongoing Deployment Flow (After Migration)

1. Work on feature branches.
2. Merge to development.
3. Push development.
4. GitHub Actions auto-deploys to cPanel.
5. Smoke test homepage, contact route, and form submission.

---

## 14. Quick Branch Verification Commands

Before each deploy, run:

git branch --show-current
git branch -a

Expected deploy-safe result:
- You push to development
- Workflow trigger remains: branches: [development]
