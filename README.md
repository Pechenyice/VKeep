# VKeep Frontend

## Directories

### public/

static assets, nothing interesting

### src/

heart of project

### server/

api server for proxying requests in development env

## Settings

### server/.env

```
PORT=3001
```

you can change it to your taste, but don't forget to change **"proxy"** field in **package.json** file at the root of the directory

### ./package.json

```
{
    ...
    ...
    "proxy": "http://localhost:3001"
    ...
    ...
}
```

change port to value from **.env** file in **server/** directory

## NPM Scripts

### After pull request

```
npm run construct
```

### After installation

```
npm run start
```

### Build

```
npm run build
```