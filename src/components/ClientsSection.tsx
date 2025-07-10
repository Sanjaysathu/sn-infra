const ClientsSection = () => {
  const clients = [
    "Johnson Controls", "BOSE", "CISCO", "NetApp", "Symantec", "VMware",
    "Televes", "SOPHOS", "PANDUIT", "SALTO", "riverbed", "Paxton",
    "CEAG", "Bodet", "palo alto NETWORKS", "NETIX CONTROLS", "LDA audio tech", "INTEREL",
    "Honeywell", "HeroApps", "dahua TECHNOLOGY"
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-sm mb-2">AWESOME BRANDS</p>
          <h2 className="text-4xl font-bold text-foreground">OUR CLIENTS</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-4 hover:bg-secondary/50 rounded-lg transition-colors duration-200"
            >
              <span className="text-muted-foreground font-semibold text-center text-sm">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;