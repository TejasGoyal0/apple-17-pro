const Footer = () => {
  const footerSections = [
    {
      title: "iPhone",
      links: ["iPhone 17 Pro", "iPhone 17", "iPhone 16", "iPhone SE", "Compare", "Accessories"]
    },
    {
      title: "Services",
      links: ["AppleCare+", "Apple Trade In", "Financing", "Apple Store", "Order Status"]
    },
    {
      title: "Account",
      links: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"]
    },
    {
      title: "Apple Store",
      links: ["Find a Store", "Genius Bar", "Today at Apple", "Apple Store App", "Refurbished"]
    }
  ];

  return (
    <footer className="bg-apple-light-gray border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-display font-semibold text-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href="#" 
                      className="font-text text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <p className="font-text text-sm text-muted-foreground">
                Copyright © 2025 Apple Inc. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="font-text text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-text text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Use
              </a>
              <a href="#" className="font-text text-sm text-muted-foreground hover:text-foreground transition-colors">
                Sales and Refunds
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;