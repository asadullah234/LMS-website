import express from "express"
import { addCourse, DashboardData, getEducatorCourses, getEnrolledStudentData, updateRoleToEducator } from "../controllers/educatorController"
import upload from "../config/multer"
import { protectEducator } from "../middlewares/authMiddleware"
const educatorRouter=express.Router()
//add educator role 
    educatorRouter.get('/update-role',updateRoleToEducator)
    
    educatorRouter.post('/add-course',upload.single('image').protectEducator,addCourse)
         educatorRouter.get('/courses',protectEducator,getEducatorCourses)
           educatorRouter.get('/dashboard',protectEducator,DashboardData)
           educatorRouter.get('/enrolled-students',protectEducator,getEnrolledStudentData)
         export default educatorRouter;