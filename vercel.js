{
  "version": 2,
  "builds": [
      {
          "src": "./server.js",
          "use": "@vercel/node"
      }
  ],
  "routes": [
      {
          "src": "/routes/(.*)",
          "dest": "/"
      }
  ]
}
