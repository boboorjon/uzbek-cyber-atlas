
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Download, 
  Wifi, 
  Shield, 
  Smartphone, 
  Monitor, 
  Apple,
  Laptop,
  Copy,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Access = () => {
  const { toast } = useToast();
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const vpnConfigs = [
    {
      name: 'WireGuard',
      type: 'wireguard',
      description: 'Modern, fast, and secure VPN protocol',
      icon: Shield,
      configFile: 'cyberacademy-wireguard.conf',
      recommended: true,
      platforms: ['Windows', 'macOS', 'Linux', 'Android', 'iOS']
    },
    {
      name: 'OpenVPN',
      type: 'openvpn',
      description: 'Widely supported, battle-tested VPN protocol',
      icon: Wifi,
      configFile: 'cyberacademy-openvpn.ovpn',
      recommended: false,
      platforms: ['Windows', 'macOS', 'Linux', 'Android', 'iOS']
    }
  ];

  const platforms = [
    {
      name: 'Windows',
      icon: Monitor,
      instructions: {
        wireguard: [
          'Download and install WireGuard from wireguard.com',
          'Click "Add Tunnel" and select "Import tunnel(s) from file"',
          'Select the downloaded .conf file',
          'Click "Activate" to connect'
        ],
        openvpn: [
          'Download and install OpenVPN Connect from openvpn.net',
          'Launch OpenVPN Connect',
          'Click "+" and select "Import Profile"',
          'Select the downloaded .ovpn file',
          'Click "Connect"'
        ]
      }
    },
    {
      name: 'macOS',
      icon: Apple,
      instructions: {
        wireguard: [
          'Install WireGuard from Mac App Store',
          'Open WireGuard app',
          'Click "Import tunnel(s) from file"',
          'Select the downloaded .conf file',
          'Toggle the connection to activate'
        ],
        openvpn: [
          'Download and install Tunnelblick from tunnelblick.net',
          'Double-click the downloaded .ovpn file',
          'Enter admin password when prompted',
          'Click "Connect" in Tunnelblick'
        ]
      }
    },
    {
      name: 'Linux',
      icon: Laptop,
      instructions: {
        wireguard: [
          'Install WireGuard: sudo apt install wireguard (Ubuntu/Debian)',
          'Copy config file to: /etc/wireguard/',
          'Start connection: sudo wg-quick up cyberacademy',
          'Stop connection: sudo wg-quick down cyberacademy'
        ],
        openvpn: [
          'Install OpenVPN: sudo apt install openvpn (Ubuntu/Debian)',
          'Run: sudo openvpn --config cyberacademy-openvpn.ovpn',
          'Enter credentials when prompted',
          'Keep terminal open while connected'
        ]
      }
    },
    {
      name: 'Android',
      icon: Smartphone,
      instructions: {
        wireguard: [
          'Install WireGuard app from Google Play Store',
          'Tap "+" and select "Import from file or archive"',
          'Select the downloaded .conf file',
          'Tap the toggle to connect'
        ],
        openvpn: [
          'Install OpenVPN Connect from Google Play Store',
          'Tap "+" and select "Import Profile"',
          'Select the downloaded .ovpn file',
          'Tap "Connect"'
        ]
      }
    },
    {
      name: 'iOS',
      icon: Apple,
      instructions: {
        wireguard: [
          'Install WireGuard app from App Store',
          'Tap "+" and select "Create from file or archive"',
          'Select the downloaded .conf file',
          'Tap the toggle to connect'
        ],
        openvpn: [
          'Install OpenVPN Connect from App Store',
          'Tap "+" and select "Import Profile"',
          'Select the downloaded .ovpn file',
          'Tap "Connect"'
        ]
      }
    }
  ];

  const handleDownload = (configType: string, fileName: string) => {
    // Simulate config file content
    const configContent = configType === 'wireguard' ? 
      `[Interface]
PrivateKey = YOUR_PRIVATE_KEY
Address = 10.0.0.2/32
DNS = 1.1.1.1

[Peer]
PublicKey = SERVER_PUBLIC_KEY
Endpoint = vpn.cyberacademy.uz:51820
AllowedIPs = 0.0.0.0/0
PersistentKeepalive = 25` :
      `client
dev tun
proto udp
remote vpn.cyberacademy.uz 1194
resolv-retry infinite
nobind
persist-key
persist-tun
ca ca.crt
cert client.crt
key client.key
comp-lzo
verb 3`;

    const blob = new Blob([configContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Configuration downloaded",
      description: `${fileName} has been downloaded successfully.`,
    });
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(label);
      setTimeout(() => setCopiedText(null), 2000);
      toast({
        title: "Copied to clipboard",
        description: `${label} has been copied to your clipboard.`,
      });
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-background via-card to-background p-8 border border-border/50">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
            <Shield className="h-8 w-8 text-primary" />
            VPN Access Configuration
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Download VPN configuration files and setup instructions for accessing our lab environment
          </p>
          <div className="flex items-center gap-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <AlertCircle className="h-5 w-5 text-yellow-500" />
            <div>
              <p className="font-medium text-foreground">Important Notice</p>
              <p className="text-sm text-muted-foreground">
                VPN access is required to connect to our cybersecurity lab machines and challenges.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* VPN Configuration Downloads */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vpnConfigs.map((config) => (
          <Card key={config.type} className={`border-border/50 hover:border-primary/30 transition-all duration-300 ${config.recommended ? 'ring-2 ring-primary/20' : ''}`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <config.icon className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {config.name}
                      {config.recommended && (
                        <Badge className="bg-primary/20 text-primary">Recommended</Badge>
                      )}
                    </CardTitle>
                    <CardDescription>{config.description}</CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {config.platforms.map((platform) => (
                  <Badge key={platform} variant="outline" className="text-xs">
                    {platform}
                  </Badge>
                ))}
              </div>
              <Button 
                onClick={() => handleDownload(config.type, config.configFile)}
                className="w-full"
                size="lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Download {config.name} Config
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Setup Instructions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Monitor className="h-5 w-5" />
            Setup Instructions
          </CardTitle>
          <CardDescription>
            Follow these step-by-step instructions to configure VPN on your device
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="Windows" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              {platforms.map((platform) => (
                <TabsTrigger key={platform.name} value={platform.name} className="flex items-center gap-2">
                  <platform.icon className="h-4 w-4" />
                  {platform.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {platforms.map((platform) => (
              <TabsContent key={platform.name} value={platform.name} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* WireGuard Instructions */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" />
                        WireGuard Setup
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ol className="space-y-3">
                        {platform.instructions.wireguard.map((step, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-medium flex items-center justify-center">
                              {index + 1}
                            </div>
                            <span className="text-sm text-foreground">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </CardContent>
                  </Card>

                  {/* OpenVPN Instructions */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Wifi className="h-5 w-5 text-accent" />
                        OpenVPN Setup
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ol className="space-y-3">
                        {platform.instructions.openvpn.map((step, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent text-sm font-medium flex items-center justify-center">
                              {index + 1}
                            </div>
                            <span className="text-sm text-foreground">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* Connection Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wifi className="h-5 w-5" />
            Connection Details
          </CardTitle>
          <CardDescription>
            Server information and connection parameters
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Server Address</label>
              <div className="flex items-center gap-2">
                <code className="bg-secondary px-3 py-2 rounded text-sm font-mono flex-1">
                  vpn.cyberacademy.uz
                </code>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => copyToClipboard('vpn.cyberacademy.uz', 'Server address')}
                >
                  {copiedText === 'Server address' ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">WireGuard Port</label>
              <div className="flex items-center gap-2">
                <code className="bg-secondary px-3 py-2 rounded text-sm font-mono flex-1">
                  51820
                </code>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => copyToClipboard('51820', 'WireGuard port')}
                >
                  {copiedText === 'WireGuard port' ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">OpenVPN Port</label>
              <div className="flex items-center gap-2">
                <code className="bg-secondary px-3 py-2 rounded text-sm font-mono flex-1">
                  1194
                </code>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => copyToClipboard('1194', 'OpenVPN port')}
                >
                  {copiedText === 'OpenVPN port' ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Protocol</label>
              <code className="bg-secondary px-3 py-2 rounded text-sm font-mono block">
                UDP
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Access;
