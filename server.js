const dns = require('dns');

// Function to resolve the IP address of a domain
function resolveDomain(domain) {
  dns.lookup(domain, (err, address) => {
    if (err) {
      console.log(`Error: ${err.message}`);
      return;
    }
    console.log(`The IP address of ${domain} is ${address}`);
  });
}

// Example usage
const domain = 'maayn.ddns.net'; // Replace with the domain you want
resolveDomain(domain);
