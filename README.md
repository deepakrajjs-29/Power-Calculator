# ⚡ PowerCalculator

<div align="center">

![PowerCalculator Banner](https://img.shields.io/badge/PowerCalculator-Electricity%20Bill%20Manager-blue?style=for-the-badge&logo=lightning&logoColor=white)

**A Modern, User-Friendly Electricity Bill Calculator for Indian Households**

[![Made with HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Styled with CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Powered by JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Usage](#-usage) • [Contributing](#-contributing) • [License](#-license)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Demo](#-demo)
- [Installation](#-installation)
- [Usage](#-usage)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Configuration](#-configuration)
- [Contributing](#-contributing)
- [Roadmap](#-roadmap)
- [Support](#-support)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

---

## 🌟 Overview

**PowerCalculator** is a comprehensive, intuitive web application designed to help Indian households calculate their monthly electricity bills with precision. Built with modern web technologies, it provides detailed consumption analysis for every room and appliance in your home.

### Why PowerCalculator?

- 🎯 **Accurate Calculations**: Get precise estimates based on actual appliance wattage and usage patterns
- 📊 **Detailed Breakdown**: Room-by-room and appliance-by-appliance consumption analysis
- 🏠 **Customizable**: Support for multiple rooms and various appliance types
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🖨️ **Print-Ready**: Generate professional bill reports for record-keeping
- 🔐 **Secure Access**: Login system to protect your data

---

## ✨ Features

### 🔑 Authentication System
- Secure login interface with credential validation
- Session management
- Elegant error handling with visual feedback

### 🏘️ Multi-Room Support
- Calculate consumption for unlimited rooms
- Custom room naming
- Kitchen appliances section (default)

### 💡 Comprehensive Appliance Database
- **Fans**: Multiple brands (Crompton, Usha, Havells, Orient, Bajaj)
- **Lighting**: Tubelights, night lights, color lights
- **Kitchen Appliances**: Mixie, grinder, refrigerator, chimney, oven, dishwasher
- Customizable wattage and daily usage hours for each appliance

### 📊 Advanced Analytics
- Total monthly consumption (kWh)
- Itemized cost breakdown
- Highest consuming room/area identification
- Average consumption per room
- Daily usage statistics

### 🎨 Modern UI/UX
- Beautiful gradient backgrounds
- Smooth animations and transitions
- Progress indicators
- Responsive grid layouts
- Print-optimized bill format

### 🌍 Regional Support
- Tamil Nadu electricity rates
- Kerala electricity rates
- Easily extensible for other states



## 📥 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or dependencies required!

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/deepakrajjs-29/powercalculator.git
   cd powercalculator
   ```

2. **Open in browser**
   ```bash
   # Simply open the HTML file
   open index.html
   
   # Or use a local server (optional)
   python -m http.server 8000
   # Visit http://localhost:8000
   ```

3. **Start calculating!**
   - Login with default credentials
   - Add your rooms and appliances
   - Get instant bill calculations

---

## 📖 Usage

### Step 1: Login
1. Enter your username and password
2. Click "Login" to access the calculator

### Step 2: Configure Rooms
1. Select your state (Tamil Nadu or Kerala)
2. Enter the number of rooms (excluding kitchen)
3. Click "Next" to proceed

### Step 3: Add Appliances
1. Name each room (e.g., "Living Room", "Bedroom 1")
2. Select appliances and their brands
3. Set daily usage hours for each appliance
4. Configure kitchen appliances (automatically included)

### Step 4: Calculate & Analyze
1. Click "Calculate Bill"
2. View detailed consumption breakdown
3. Print or save the report
4. Use insights to optimize energy usage

---

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Structure and semantic markup |
| **CSS3** | Modern styling with gradients, animations, and flexbox/grid |
| **JavaScript (ES6+)** | Application logic and interactivity |
| **No Dependencies** | Pure vanilla JavaScript - no frameworks needed! |

### Key Features Used:
- CSS Grid & Flexbox for responsive layouts
- CSS Animations for smooth transitions
- LocalStorage for session management (optional enhancement)
- Print CSS for report generation

---

## 📁 Project Structure

```
powercalculator/
│
├── index.html              # Main application file
├── README.md               # This file
├── LICENSE                 # MIT License
│
├── assets/                 # (Optional) Additional resources
│   ├── images/            # Screenshots and logos
│   └── docs/              # Additional documentation
│
└── examples/              # Usage examples
    └── sample-bills/      # Sample output bills
```

---

## ⚙️ Configuration

### Adding New States
```javascript
// In the HTML file, find the state selection dropdown
<select id="state">
    <option value="Tamil Nadu">Tamil Nadu</option>
    <option value="Kerala">Kerala</option>
    <!-- Add your state here -->
    <option value="Your State">Your State</option>
</select>

// Update the rate in calculateBill() function
const ratePerUnit = selectedState === "Your State" ? YourRate : 7.5;
```

### Adding New Appliances
```javascript
// Add to the room section HTML
<div class="appliance-item">
    <label>Your Appliance (W):</label>
    <input type="number" id="yourAppliance${i}" min="0" value="0">
    <small>Daily Hours: <input type="number" id="yourApplianceHours${i}" min="0" max="24" value="0"></small>
</div>
```

### Customizing Login Credentials
```javascript
// Modify the validCredentials array in the script section
const validCredentials = [
    { username: 'yourusername', password: 'yourpassword' },
    // Add more users as needed
];
```

> **Security Note**: For production use, implement proper backend authentication and never store passwords in plain text.

---

## 🤝 Contributing

We love contributions! PowerCalculator is an open-source project and we welcome contributions of all kinds.

### How to Contribute

1. **Fork the Repository**
   ```bash
   # Click the 'Fork' button on GitHub
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/your-username/powercalculator.git
   cd powercalculator
   ```

3. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

4. **Make Your Changes**
   - Write clean, documented code
   - Follow the existing code style
   - Test thoroughly

5. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Add: Amazing new feature"
   ```

6. **Push to Your Fork**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **Open a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Describe your changes clearly

### Contribution Guidelines

- 📝 **Code Quality**: Write clean, readable, and maintainable code
- 📚 **Documentation**: Update README and inline comments
- 🧪 **Testing**: Test your changes across different browsers
- 🎨 **Design**: Maintain the existing design language
- 💬 **Communication**: Be respectful and constructive

### What We're Looking For

- 🐛 Bug fixes
- ✨ New features
- 📖 Documentation improvements
- 🌍 Translations and localization
- 🎨 UI/UX enhancements
- ⚡ Performance optimizations
- 🧪 Test coverage

### Code of Conduct

This project adheres to a Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [deepakrajjs2909@gmail.com](mailto:deepakrajjs2909@gmail.com).

---

## 🗺️ Roadmap

### Version 2.0 (Upcoming)
- [ ] Dark mode support
- [ ] Data export (PDF, CSV)
- [ ] Historical data tracking
- [ ] Comparison with previous months
- [ ] Multi-language support
- [ ] Advanced analytics dashboard

### Version 2.5 (Future)
- [ ] Backend integration with database
- [ ] User profiles and data persistence
- [ ] Mobile app (React Native)
- [ ] AI-powered usage recommendations
- [ ] Smart meter integration

### Version 3.0 (Vision)
- [ ] Social features (compare with neighbors)
- [ ] Gamification (energy saving challenges)
- [ ] IoT device integration
- [ ] Real-time monitoring

---

## 💡 Support

### Getting Help

- 📖 **Documentation**: Check this README and inline code comments
- 📧 **Email**: deepakrajjs2909@gmail.com

### Frequently Asked Questions

**Q: Can I use this commercially?**  
A: Yes! PowerCalculator is licensed under MIT, allowing commercial use.

**Q: How accurate are the calculations?**  
A: Calculations are based on standard formulas. Actual bills may vary based on utility rates and meter readings.

**Q: Can I add my own appliances?**  
A: Absolutely! See the [Configuration](#-configuration) section.

**Q: Is my data stored anywhere?**  
A: No, all calculations happen in your browser. No data is sent to any server.

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 PowerCalculator Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 🙏 Acknowledgments

- **Design Inspiration**: Modern web design trends and glassmorphism
- **Contributors**: Thanks to all contributors who help improve PowerCalculator
- **Community**: The open-source community for inspiration and support
- **Users**: Everyone using PowerCalculator to save energy and money!

---

## 📊 Project Stats

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/deepakrajjs-29/powercalculator?style=social)
![GitHub forks](https://img.shields.io/github/forks/deepakrajjs-29/powercalculator?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/deepakrajjs-29/powercalculator?style=social)

</div>

---

## 🌟 Star History

If you find PowerCalculator useful, please consider giving it a star! ⭐

<div align="center">

**Made with ❤️ by the PowerCalculator Team**

[⬆ Back to Top](#-powercalculator)

</div>

---

## 📞 Connect With Us

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/deepakrajjs-29)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/deepak-raj-js-snsinstitutions/)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:deepakrajjs2909@gmail.com)

</div>
