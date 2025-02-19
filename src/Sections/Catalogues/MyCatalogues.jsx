const MyCatalogue = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Featured Image */}
      <div className="mb-6">
        <img 
          src="https://plus.unsplash.com/premium_photo-1723834562784-a56d7b234360?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3JheSUyMHNpdHRpbmclMjBjb3VjaGVzJTIwaW1hZ2VzfGVufDB8fDB8fHww" 
          alt="Featured" 
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Image Grid with Fixed Heights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          "https://plus.unsplash.com/premium_photo-1673548916754-aefad0c0955a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheSUyMHNpdHRpbmclMjBjb3VjaGVzJTIwaW1hZ2VzfGVufDB8fDB8fHww",
          "https://plus.unsplash.com/premium_photo-1673548917477-4c0c8889b439?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3JheSUyMHNpdHRpbmclMjBjb3VjaGVzJTIwaW1hZ2VzfGVufDB8fDB8fHww",
          "https://plus.unsplash.com/premium_photo-1736194029585-4b75e52a2335?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJvd24lMjBzaXR0aW5nJTIwY291Y2hlcyUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
          "https://plus.unsplash.com/premium_photo-1673548916754-aefad0c0955a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheSUyMHNpdHRpbmclMjBjb3VjaGVzJTIwaW1hZ2VzfGVufDB8fDB8fHww"
        ].map((image, index) => (
          <div key={index} className="w-full h-48 md:h-64 overflow-hidden rounded-lg shadow-md">
            <img 
              src={image} 
              alt={`Catalogue ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCatalogue;
