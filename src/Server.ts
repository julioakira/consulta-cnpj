import app from './config/App'

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})
