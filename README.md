## Created based on the Expo project create react-native-app

This repository is the base skeleton for projects made with React-native. It has a mock json to simulate a RestApi access. It also uses axes to send the requisition. We have access to UNIMODELS with its android and IOS folders, which can change the source code.

Created project with the command:

yarn create react-native-app

## Present Features from the Expo

- Native project ready to be built on to your device.
- Support for unimodules and auto-linking.
- OTA updates, and Gestures out of the box.
- Full support for React Native web.
- Plug-n-play custom templates.
- Works with the Expo Client app.

## Features add in the project;

    yarn add json-server
    yarn add eslint-config-prettier
    	yarn add --dev --exact prettier
    	yarn add --dev prettier

## Start Json Server

Create a db.json file with some data

    {
    "posts": [
        { "id": 1, "title": "json-server", "author": "typicode" }
    ],
    "comments": [
        { "id": 1, "body": "some comment", "postId": 1 }
    ],
    "profile": { "name": "typicode" }
    }

json-server --watch db.json

Navigador: server ip http://localhost:3000

In emulator: http://10.0.2.2:3000

Details on https://www.npmjs.com/package/json-server

## Typescritp with types

yarn add --dev typescript @types/react @types/react-native @types/react-dom @tsconfig/react-native

Add to your tsconfig.json:

    "extends": "@tsconfig/react-native/tsconfig.json"

### Scripts for Typescrip

    create tsconfig.json: {
        "compilerOptions": {
        "allowSyntheticDefaultImports": true,
        "jsx": "react-native", "lib": ["dom", "esnext"],
        "moduleResolution": "node",
        "noEmit": true,
        "skipLibCheck": true,
        "resolveJsonModule": true,
        "strict": true }
        }

File package.json

    "scripts": {
        ... "tsc:w": "tsc --watch"
    },

Rename files to convert them to TypeScript. For example, you would rename App.js to App.tsx.

Use the .tsx extension if the file includes React components (JSX). If the file did not include any JSX, you can use the .ts file extension.

## Redux types

yarn add @types/react-redux

## Extra facilities

Source code organization was added to the elslint and Pretter project.

Find Problems ESLint statically analyzes your code to quickly find problems. ESLint is built into most text editors and you can run ESLint as part of your continuous integration pipeline.

Fix Automatically Many problems ESLint finds can be automatically fixed. ESLint fixes are syntax-aware so you won't experience errors introduced by traditional find-and-replace algorithms.

Customize Preprocess code, use custom parsers, and write your own rules that work alongside ESLint's built-in rules. You can customize ESLint to work exactly the way you need it for your project.

    INSTALL ESLINT to help organize the code https://eslint.org/

    1. Install extentions to VSCODE eslint

    2. After install on teminal

    	yarn add eslint --dev
    	yarn eslint --init

    	 obs.: answer questions

    3. INSTALL PRETTY to work together with eslint  https://prettier.io/

    	yarn add --dev --exact prettier
    	yarn add --dev prettier

    4. Install extentions to VSCODE   ESLint 2.1.8

    5. After to Install

    	In .eslintrc.json:

    	{
    	  "plugins": ["prettier"],
    	  "rules": {
    	    "prettier/prettier": "error"
    	  }
    	}

    	Run prettier on the entire project to format everything:

    	  yarn prettier --write .

    6. After install:

    	yarn add eslint-config-prettier

    	Then you need to add plugin:prettier/recommended as the last extension in your .eslintrc.json:

    	{
    	  "extends": ["plugin:prettier/recommended"]
    	}


    7. Run Typescript on the entire project to format everything:

    	yarn tsc


    8. .eslintrc.json:

        "rules": {
        "semi": [
            "warn",
            "always"
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
            "off"
        ],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "overrides": [
            {
                // enable the rule specifically for TypeScript files
                "files": [
                    "*.ts",
                    "*.tsx"
                ]
            }
        ]
    }

## Axios

- Make XMLHttpRequests from the browser
- Make http requests from node.js
- Supports the Promise API
- Intercept request and response
- Transform request and response data
- Cancel requests
- Automatic transforms for JSON data
- Client side support for protecting against XSRF

  yarn add axios @types/axios

### Links

    https://www.typescriptlang.org/
    https://eslint.org/
    https://prettier.io/
    https://www.npmjs.com/package/json-server

## Dependencies

    "@react-native-community/masked-view": "^0.1.10",
    "@react-navigation/native": "^5.8.10",
    "@react-navigation/stack": "^5.12.8",
    "axios": "^0.21.1",
    "expo": "~40.0.0",
    "expo-splash-screen": "~0.8.0",
    "expo-status-bar": "~1.0.3",
    "expo-updates": "~0.4.0",
    "json-server": "^0.16.3",
    "react": "16.13.1",
    "react-dom": "16.13.1",
    "react-native": "^0.63.4",
    "react-native-gesture-handler": "^1.9.0",
    "react-native-reanimated": "^1.13.2",
    "react-native-safe-area-context": "^3.1.9",
    "react-native-screens": "^2.16.1",
    "react-native-unimodules": "~0.12.0",
    "react-native-web": "~0.13.12",
    "react-redux": "^7.2.2"

## Devdependencies

    "@babel/core": "~7.9.0",
    "@tsconfig/react-native": "^1.0.2",
    "@types/axios": "^0.14.0",
    "@types/prettier": "^2.1.6",
    "@types/react": "^17.0.0",
    "@types/react-dom": "^17.0.0",
    "@types/react-native": "^0.63.45",
    "@types/react-redux": "^7.1.15",
    "@typescript-eslint/eslint-plugin": "^4.12.0",
    "@typescript-eslint/parser": "^4.12.0",
    "babel-jest": "~25.2.6",
    "eslint": "^7.17.0",
    "eslint-config-prettier": "^7.1.0",
    "eslint-plugin-react": "^7.22.0",
    "jest": "~25.2.6",
    "prettier": "^2.2.1",
    "react-test-renderer": "~16.13.1",
    "typescript": "^4.1.3"

## Folders

    src
        components
        pages
            home
                -- index.tsx
            Details
                -- index.tsx
        routes
            -- index.tsx
        services
            -- api.ts
            -- auth.ts
        reducers
            -- index.js
        store
        App.tsx
        index.js
        db.json
