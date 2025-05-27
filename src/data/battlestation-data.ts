import { Component, BattlestationData } from "./component-types";

export const battlestationData: BattlestationData = {
  pc: [
    {
      id: 1,
      category: "pc",
      name: "Gaming PC",
      model: "Ryzen 7 5800X + RTX 3060Ti",
      specs: [
        "Obudowa: Phanteks NV7",
        "CPU: AMD Ryzen 7 5800X",
        "GPU: NVIDIA RTX 3060Ti",
        "RAM: 64GB DDR4 3200MHz Corsair",
        "Storage: Lexar 890 Pro M.2 NVMe",
        "Storage: SSD 512GB",
        "Motherboard: ASUS Strix ROG B550 White",
        "Cooling: AORUS 360 AIO Water Cooling",
        "Fans: 9x Phanteks Fans",
        "PSU: SilentiumPC 700W",
      ],
      description:
        "Mój główny komputer do pracy i grania. Potężna maszyna z Ryzen 7 5800X i RTX 3060Ti.",
      image: "/products/pc/main-pc.webp",
      detailImages: [
        "/products/pc/pc-inside.webp",
        "/products/pc/pc-back.webp",
        "/products/pc/pc-rgb.webp",
      ],
      type: "main",
    },
  ],

  laptop: [
    {
      id: 1,
      category: "laptop",
      name: "MacBook Pro",
      model: 'MacBook Pro M3 16"',
      specs: [
        "Chip: Apple M3",
        "Screen: 16 inch",
        "Storage: 512GB",
        "RAM: 18GB",
      ],
      description:
        "Laptop do pracy mobilnej i projektów. Idealny do programowania.",
      image: "/products/laptop/macbook.webp",
      type: "main",
    },
  ],

  monitors: [
    {
      id: 1,
      category: "monitors",
      name: "Monitor główny x2",
      model: "IIYAMA G-MASTER GB2530HSU",
      specs: [
        "Size: 25 inch (x2)",
        "Refresh Rate: 75Hz",
        "Resolution: 1920x1080",
      ],
      description: "Dwa identyczne monitory IIYAMA jako główny setup do pracy.",
      image: "/products/monitors/iiyama.webp",
      type: "main",
    },
    {
      id: 2,
      category: "monitors",
      name: "Monitor gaming",
      model: "HP 25x",
      specs: [
        "Size: 24.5 inch",
        "Refresh Rate: 144Hz",
        "Resolution: 1920x1080",
        "Response Time: 1ms",
      ],
      description: "Trzeci monitor HP z wysokim odświeżaniem do gier.",
      image: "/products/monitors/hp-25x.webp",
      type: "secondary",
    },
  ],

  peripherals: [
    {
      id: 1,
      category: "peripherals",
      name: "Klawiatura",
      model: "Razer BlackWidow Pro V4",
      specs: [
        "Type: Mechanical Gaming Keyboard",
        "Switches: Razer Mechanical",
        "Backlight: RGB",
      ],
      description: "Mechaniczna klawiatura Razer do gier i pracy.",
      image: "/products/peripherals/keyboard.webp",
      type: "main",
    },
    {
      id: 2,
      category: "peripherals",
      name: "Myszka główna",
      model: "Razer Viper V2 Pro",
      specs: [
        "Type: Wireless Gaming Mouse",
        "Sensor: Focus Pro 30K",
        "Weight: Ultra-light",
      ],
      description: "Bezprzewodowa myszka gamingowa Razer.",
      image: "/products/peripherals/mouse-razer.webp",
      type: "main",
    },
    {
      id: 3,
      category: "peripherals",
      name: "Myszka laptopowa",
      model: "Logitech MX3",
      specs: [
        "Type: Productivity Mouse",
        "Connection: Wireless",
        "Features: Multi-device",
      ],
      description: "Myszka produktywności do pracy z laptopem.",
      image: "/products/peripherals/mouse-logitech.webp",
      type: "secondary",
    },
    {
      id: 4,
      category: "peripherals",
      name: "Słuchawki",
      model: "Razer BlackShark V2 Pro",
      specs: [
        "Type: Wireless Gaming Headset",
        "Audio: THX Spatial Audio",
        "Connection: 2.4GHz Wireless",
      ],
      description: "Bezprzewodowe słuchawki gamingowe.",
      image: "/products/peripherals/headset.webp",
      type: "main",
    },
    {
      id: 5,
      category: "peripherals",
      name: "Mouse Bungee",
      model: "Razer Mouse Bungee",
      specs: ["Type: Cable Management", "Compatibility: Universal"],
      description: "Uchwyt na kabel myszki.",
      image: "/products/peripherals/mouse-bungee.webp",
      type: "secondary",
    },
  ],

  audio: [
    {
      id: 1,
      category: "audio",
      name: "Głośniki",
      model: "EDIFIER R1855DB 2.0",
      specs: [
        "Type: Active Speakers",
        "Color: Black",
        "Connectivity: Bluetooth, RCA, AUX",
      ],
      description: "Aktywne głośniki EDIFIER.",
      image: "/products/audio/speakers.webp",
      type: "main",
    },
    {
      id: 2,
      category: "audio",
      name: "Mikrofon",
      model: "Novox NC1",
      specs: ["Type: USB Condenser Microphone", "Use: Streaming and calls"],
      description: "Mikrofon pojemnościowy USB.",
      image: "/products/audio/microphone.webp",
      type: "main",
    },
  ],

  workspace: [
    {
      id: 1,
      category: "workspace",
      name: "Biurko",
      model: "Autorskie z dębowym blatem",
      specs: [
        "Material: Oak wood top",
        "Height Range: 60cm - 125cm",
        "Features: Electric height adjustment",
      ],
      description: "Autorskie biurko z regulacją wysokości.",
      image: "/products/workspace/desk.webp",
      type: "main",
    },
    {
      id: 2,
      category: "workspace",
      name: "Fotel",
      model: "Fotel ergonomiczny",
      specs: [
        "Type: Ergonomic Office Chair",
        "Features: Full ergonomic support",
      ],
      description: "Ergonomiczny fotel biurowy.",
      image: "/products/workspace/chair.webp",
      type: "main",
    },
  ],
};
