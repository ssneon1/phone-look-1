export interface DeviceIssue {
  id: string;
  name: string;
  price: string;
  description: string;
}

export interface DeviceModel {
  id: string;
  name: string;
  image: string;
  video?: string;
  issues: DeviceIssue[];
}

export interface DeviceCategory {
  id: string;
  name: string;
  icon: string;
  models: DeviceModel[];
}

export const devices: DeviceCategory[] = [
  {
    id: "iphone",
    name: "iPhone",
    icon: "smartphone",
    models: [
      {
        id: "iphone-16-pro-max",
        name: "iPhone 16 Pro Max",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=800&fit=crop",
        video: "https://www.youtube.com/embed/xqyUdNxWazA",
        issues: [
          { id: "screen", name: "Screen Replacement", price: "₹24,999", description: "Original OLED display replacement with warranty" },
          { id: "battery", name: "Battery Replacement", price: "₹6,999", description: "Premium battery with 500+ charge cycles" },
          { id: "camera", name: "Camera Repair", price: "₹12,999", description: "Main/ultra-wide/telephoto camera fix" },
          { id: "charging", name: "Charging Port", price: "₹4,999", description: "USB-C port replacement" },
          { id: "water", name: "Water Damage", price: "₹8,999", description: "Complete water damage restoration" },
          { id: "back-glass", name: "Back Glass", price: "₹9,999", description: "Ceramic shield back replacement" },
        ]
      },
      {
        id: "iphone-16-pro",
        name: "iPhone 16 Pro",
        image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=600&h=800&fit=crop",
        issues: [
          { id: "screen", name: "Screen Replacement", price: "₹22,999", description: "Original OLED display replacement" },
          { id: "battery", name: "Battery Replacement", price: "₹6,499", description: "Premium battery replacement" },
          { id: "camera", name: "Camera Repair", price: "₹11,999", description: "Camera module repair" },
          { id: "charging", name: "Charging Port", price: "₹4,499", description: "USB-C port replacement" },
          { id: "water", name: "Water Damage", price: "₹7,999", description: "Water damage repair" },
          { id: "back-glass", name: "Back Glass", price: "₹8,999", description: "Back glass replacement" },
        ]
      },
      {
        id: "iphone-16",
        name: "iPhone 16",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=800&fit=crop",
        issues: [
          { id: "screen", name: "Screen Replacement", price: "₹18,999", description: "Original display replacement" },
          { id: "battery", name: "Battery Replacement", price: "₹5,999", description: "Premium battery" },
          { id: "camera", name: "Camera Repair", price: "₹8,999", description: "Camera fix" },
          { id: "charging", name: "Charging Port", price: "₹3,999", description: "Port replacement" },
          { id: "water", name: "Water Damage", price: "₹6,999", description: "Water damage repair" },
        ]
      },
      {
        id: "iphone-15-pro-max",
        name: "iPhone 15 Pro Max",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=800&fit=crop",
        issues: [
          { id: "screen", name: "Screen Replacement", price: "₹21,999", description: "Original OLED display" },
          { id: "battery", name: "Battery Replacement", price: "₹5,999", description: "Premium battery" },
          { id: "camera", name: "Camera Repair", price: "₹10,999", description: "Camera module" },
          { id: "charging", name: "Charging Port", price: "₹3,999", description: "USB-C port" },
          { id: "water", name: "Water Damage", price: "₹7,499", description: "Water damage fix" },
          { id: "back-glass", name: "Back Glass", price: "₹7,999", description: "Back glass" },
        ]
      },
      {
        id: "iphone-15-pro",
        name: "iPhone 15 Pro",
        image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=600&h=800&fit=crop",
        issues: [
          { id: "screen", name: "Screen Replacement", price: "₹19,999", description: "Original OLED" },
          { id: "battery", name: "Battery Replacement", price: "₹5,499", description: "Premium battery" },
          { id: "camera", name: "Camera Repair", price: "₹9,999", description: "Camera fix" },
          { id: "charging", name: "Charging Port", price: "₹3,499", description: "USB-C port" },
          { id: "water", name: "Water Damage", price: "₹6,999", description: "Water damage" },
        ]
      },
      {
        id: "iphone-15",
        name: "iPhone 15",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=800&fit=crop",
        issues: [
          { id: "screen", name: "Screen Replacement", price: "₹16,999", description: "Original display" },
          { id: "battery", name: "Battery Replacement", price: "₹4,999", description: "Premium battery" },
          { id: "camera", name: "Camera Repair", price: "₹7,999", description: "Camera fix" },
          { id: "charging", name: "Charging Port", price: "₹2,999", description: "USB-C port" },
          { id: "water", name: "Water Damage", price: "₹5,999", description: "Water damage" },
        ]
      },
      {
        id: "iphone-14-pro-max",
        name: "iPhone 14 Pro Max",
        image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=600&h=800&fit=crop",
        issues: [
          { id: "screen", name: "Screen Replacement", price: "₹19,999", description: "Original OLED" },
          { id: "battery", name: "Battery Replacement", price: "₹4,999", description: "Premium battery" },
          { id: "camera", name: "Camera Repair", price: "₹9,499", description: "Camera fix" },
          { id: "charging", name: "Charging Port", price: "₹2,999", description: "Lightning port" },
          { id: "water", name: "Water Damage", price: "₹6,499", description: "Water damage" },
        ]
      },
      {
        id: "iphone-14",
        name: "iPhone 14",
        image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=600&h=800&fit=crop",
        issues: [
          { id: "screen", name: "Screen Replacement", price: "₹14,999", description: "Original display" },
          { id: "battery", name: "Battery Replacement", price: "₹4,499", description: "Premium battery" },
          { id: "camera", name: "Camera Repair", price: "₹6,999", description: "Camera fix" },
          { id: "charging", name: "Charging Port", price: "₹2,499", description: "Lightning port" },
        ]
      },
      {
        id: "iphone-13",
        name: "iPhone 13",
        image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=600&h=800&fit=crop",
        issues: [
          { id: "screen", name: "Screen Replacement", price: "₹12,999", description: "Original display" },
          { id: "battery", name: "Battery Replacement", price: "₹3,999", description: "Premium battery" },
          { id: "camera", name: "Camera Repair", price: "₹5,999", description: "Camera fix" },
          { id: "charging", name: "Charging Port", price: "₹2,299", description: "Lightning port" },
        ]
      },
      {
        id: "iphone-12",
        name: "iPhone 12",
        image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600&h=800&fit=crop",
        issues: [
          { id: "screen", name: "Screen Replacement", price: "₹10,999", description: "Original display" },
          { id: "battery", name: "Battery Replacement", price: "₹3,499", description: "Premium battery" },
          { id: "camera", name: "Camera Repair", price: "₹4,999", description: "Camera fix" },
          { id: "charging", name: "Charging Port", price: "₹1,999", description: "Lightning port" },
        ]
      },
      {
        id: "iphone-11",
        name: "iPhone 11",
        image: "https://images.unsplash.com/photo-1573148195900-7845dcb9b627?w=600&h=800&fit=crop",
        issues: [
          { id: "screen", name: "Screen Replacement", price: "₹8,999", description: "Original display" },
          { id: "battery", name: "Battery Replacement", price: "₹2,999", description: "Premium battery" },
          { id: "camera", name: "Camera Repair", price: "₹3,999", description: "Camera fix" },
          { id: "charging", name: "Charging Port", price: "₹1,799", description: "Lightning port" },
        ]
      },
    ]
  },
  {
    id: "ipad",
    name: "iPad",
    icon: "tablet",
    models: [
      {
        id: "ipad-pro-12",
        name: "iPad Pro 12.9\"",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=800&fit=crop",
        issues: [
          { id: "screen", name: "Screen Replacement", price: "₹34,999", description: "Original Liquid Retina display" },
          { id: "battery", name: "Battery Replacement", price: "₹8,999", description: "Premium battery" },
          { id: "charging", name: "Charging Port", price: "₹5,999", description: "USB-C port" },
          { id: "camera", name: "Camera Repair", price: "₹9,999", description: "Camera module" },
        ]
      },
      {
        id: "ipad-pro-11",
        name: "iPad Pro 11\"",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=800&fit=crop",
        issues: [
          { id: "screen", name: "Screen Replacement", price: "₹28,999", description: "Original Liquid Retina display" },
          { id: "battery", name: "Battery Replacement", price: "₹7,499", description: "Premium battery" },
          { id: "charging", name: "Charging Port", price: "₹4,999", description: "USB-C port" },
          { id: "camera", name: "Camera Repair", price: "₹8,499", description: "Camera module" },
        ]
      },
      {
        id: "ipad-air",
        name: "iPad Air",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=800&fit=crop",
        issues: [
          { id: "screen", name: "Screen Replacement", price: "₹18,999", description: "Original display" },
          { id: "battery", name: "Battery Replacement", price: "₹5,999", description: "Premium battery" },
          { id: "charging", name: "Charging Port", price: "₹3,999", description: "USB-C port" },
        ]
      },
      {
        id: "ipad-mini",
        name: "iPad Mini",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=800&fit=crop",
        issues: [
          { id: "screen", name: "Screen Replacement", price: "₹14,999", description: "Original display" },
          { id: "battery", name: "Battery Replacement", price: "₹4,999", description: "Premium battery" },
          { id: "charging", name: "Charging Port", price: "₹3,499", description: "USB-C port" },
        ]
      },
      {
        id: "ipad-10",
        name: "iPad (10th Gen)",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=800&fit=crop",
        issues: [
          { id: "screen", name: "Screen Replacement", price: "₹12,999", description: "Original display" },
          { id: "battery", name: "Battery Replacement", price: "₹4,499", description: "Premium battery" },
          { id: "charging", name: "Charging Port", price: "₹2,999", description: "USB-C port" },
        ]
      },
    ]
  },
  {
    id: "macbook",
    name: "MacBook",
    icon: "laptop",
    models: [
      {
        id: "macbook-pro-16",
        name: "MacBook Pro 16\"",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop",
        issues: [
          { id: "screen", name: "Screen Replacement", price: "₹44,999", description: "Original Retina display" },
          { id: "battery", name: "Battery Replacement", price: "₹14,999", description: "Premium battery" },
          { id: "keyboard", name: "Keyboard Repair", price: "₹12,999", description: "Full keyboard replacement" },
          { id: "trackpad", name: "Trackpad", price: "₹8,999", description: "Force Touch trackpad" },
          { id: "charging", name: "Charging Port", price: "₹6,999", description: "MagSafe/USB-C port" },
        ]
      },
      {
        id: "macbook-pro-14",
        name: "MacBook Pro 14\"",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop",
        issues: [
          { id: "screen", name: "Screen Replacement", price: "₹38,999", description: "Original Retina display" },
          { id: "battery", name: "Battery Replacement", price: "₹12,999", description: "Premium battery" },
          { id: "keyboard", name: "Keyboard Repair", price: "₹10,999", description: "Full keyboard" },
          { id: "trackpad", name: "Trackpad", price: "₹7,999", description: "Force Touch trackpad" },
          { id: "charging", name: "Charging Port", price: "₹5,999", description: "MagSafe/USB-C port" },
        ]
      },
      {
        id: "macbook-air-15",
        name: "MacBook Air 15\"",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop",
        issues: [
          { id: "screen", name: "Screen Replacement", price: "₹32,999", description: "Original Retina display" },
          { id: "battery", name: "Battery Replacement", price: "₹10,999", description: "Premium battery" },
          { id: "keyboard", name: "Keyboard Repair", price: "₹8,999", description: "Full keyboard" },
          { id: "trackpad", name: "Trackpad", price: "₹6,999", description: "Force Touch trackpad" },
        ]
      },
      {
        id: "macbook-air-13",
        name: "MacBook Air 13\"",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop",
        issues: [
          { id: "screen", name: "Screen Replacement", price: "₹26,999", description: "Original Retina display" },
          { id: "battery", name: "Battery Replacement", price: "₹8,999", description: "Premium battery" },
          { id: "keyboard", name: "Keyboard Repair", price: "₹7,999", description: "Full keyboard" },
          { id: "trackpad", name: "Trackpad", price: "₹5,999", description: "Force Touch trackpad" },
        ]
      },
    ]
  },
  {
    id: "apple-watch",
    name: "Apple Watch",
    icon: "watch",
    models: [
      {
        id: "apple-watch-ultra-2",
        name: "Apple Watch Ultra 2",
        image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=600&fit=crop",
        issues: [
          { id: "screen", name: "Screen Replacement", price: "₹14,999", description: "Original sapphire display" },
          { id: "battery", name: "Battery Replacement", price: "₹4,999", description: "Premium battery" },
          { id: "crown", name: "Digital Crown", price: "₹3,999", description: "Crown repair/replacement" },
          { id: "band", name: "Band Replacement", price: "₹1,999", description: "Original band" },
        ]
      },
      {
        id: "apple-watch-series-9",
        name: "Apple Watch Series 9",
        image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=600&fit=crop",
        issues: [
          { id: "screen", name: "Screen Replacement", price: "₹11,999", description: "Original display" },
          { id: "battery", name: "Battery Replacement", price: "₹3,999", description: "Premium battery" },
          { id: "crown", name: "Digital Crown", price: "₹2,999", description: "Crown repair" },
          { id: "band", name: "Band Replacement", price: "₹1,499", description: "Original band" },
        ]
      },
      {
        id: "apple-watch-se",
        name: "Apple Watch SE",
        image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=600&fit=crop",
        issues: [
          { id: "screen", name: "Screen Replacement", price: "₹7,999", description: "Original display" },
          { id: "battery", name: "Battery Replacement", price: "₹2,999", description: "Premium battery" },
          { id: "crown", name: "Digital Crown", price: "₹1,999", description: "Crown repair" },
          { id: "band", name: "Band Replacement", price: "₹999", description: "Original band" },
        ]
      },
    ]
  },
];
