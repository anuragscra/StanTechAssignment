# React Native Task Manager App

This is a simple **React Native Task Manager** app that demonstrates full **CRUD operations** using **Redux Toolkit** and **AsyncStorage**. It allows users to add, edit, delete, and persist tasks locally on the device.

## 🚀 Features

- ⚛️ Built with React Native
- 🗃️ Local storage using `@react-native-async-storage/async-storage`
- 🧠 State management with Redux Toolkit
- 🔁 Full CRUD operations:
  - **Create** a new task
  - **Read** existing tasks from local storage
  - **Update** task details
  - **Delete** a task

## 🛠️ Tech Stack

- React Native
- Redux Toolkit
- AsyncStorage
- React Navigation

## 📥 Getting Started (ZIP Folder Instructions)

If you've received this project as a `.zip` folder, follow the steps below to run it on your machine:

### 1. 📁 Unzip the Folder

- Right-click the ZIP file and choose **"Extract All"** or use a terminal:
  ```bash
  unzip task-manager-app.zip
  cd task-manager-app
     npm install
  cd ios
  pod install (for ios)
  ```

### . 📁 Run the app in android

npx react-native run-android

### . 📁 Run the app in ios

npx react-native run-ios

#### App Screenshots

![App Screenshot](./App/assets/ListTask.png)
![App Screenshot](./App/assets/AddTask.png)
