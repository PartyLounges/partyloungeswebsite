import './index.css'

function App() {
  return (
    <div className="container mx-auto bg-theme-white p-5p tablet:p-8p desktop:p-10p">
      <h1 className="text-2xl font-red-hat-display">Welcome</h1>
      <h2 className="text-xl">Section Title</h2>
      <h3 className="text-lg">Subheading</h3>
      <h4 className="text-base">Minor Heading</h4>
      <p>This is a paragraph with custom text styling.</p>
      <ul>
        <li>First bullet point</li>
        <li>Second bullet point</li>
      </ul>
      <ol>
        <li>First numbered point</li>
        <li>Second numbered point</li>
      </ol>
      <a href="#" className="hover:bg-theme-brown hover:text-theme-white">
        Read More
      </a>
    </div>
  );
}

export default App
