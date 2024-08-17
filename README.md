# GeoSiteList

[![GitHub stars](https://img.shields.io/github/stars/actusnileh/GeoSiteList)](https://github.com/actusnileh/GeoSiteList/stargazers)
[![Website](https://img.shields.io/badge/website-live-brightgreen)](https://actusnileh.github.io/GeoSiteList/)

GeoSiteList is a convenient and powerful search tool designed to help you quickly access geosite data. With easy domain category selection, you can view, copy, and use specific domain lists with just a few clicks.

![GeoSiteList Screenshot](https://i.imgur.com/tHd1fWW.png)

## ✨ Features

- **Effortless Search**: Find relevant geosite data easily with category-based filtering.
- **Quick Access**: Select and display the domain categories at the top for easy copying and usage.
- **Flexible Modes**: Run in both developer and production environments with minimal setup.

## 📚 Table of Contents

- [Dependencies](#dependencies)
- [Installation](#installation)
- [Main Commands](#main-commands)
- [Contributing](#contributing)
- [License](#license)

## ⚙️ Dependencies

Before you get started, ensure you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [GNU Make](https://www.gnu.org/software/make/)

## 🚀 Installation

Follow these steps to get GeoSiteList up and running locally:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/actusnileh/GeoSiteList.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd GeoSiteList
    ```

3. **Run the project in developer or production mode:**
    - Developer mode:
      ```bash
      make dev
      ```
    - Production mode:
      ```bash
      make prod
      ```

## 🔧 Main Commands

- `make dev` - Start the development container.
- `make drop-dev` - Stop the development container.
- `make logs-dev` - View development logs.
- `make prod` - Start the production container.
- `make drop-prod` - Stop the production container.
- `make logs-prod` - View production logs.
- `make drop-all` - Stop all containers.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place! Whether it’s bug reports, feature requests, or pull requests, your help is always welcome.

1. Fork the project.
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

🌐 [Visit the live site](https://actusnileh.github.io/GeoSiteList/) | ⭐ [Star this project](https://github.com/actusnileh/GeoSiteList/stargazers)

