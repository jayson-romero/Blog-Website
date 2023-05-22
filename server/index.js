import express from "express"
import authRoutes from "./routes/auth.js"
import usersRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/users", usersRoutes)
app.use("/api/posts", postRoutes)


app.listen(8800, () => {
   console.log("Connected!")
})