
import { Request, Response } from "express"
import { CommentService } from "./comment.service";


const createComment = async (req:Request, res:Response) => {
    try {
        const user = req.user;
        req.body.authorId = user?.id
        const result = await CommentService.createComment(req.body)
        res.status(201).json(result)
    } catch (error) {
        res.status(201).json({
             error:'Comment creation failed',
             details:error
        })
    }
}

const getCommentById = async (req:Request, res:Response) => {
        try {
            const {commentId} = req.params
            const result = await CommentService.getCommentById(commentId as string)
        } catch (error) {
            res.status(201).json({
             error:'Comment creation failed',
             details:error
        })
        }
    }

const getCommentsByAuthor = async (req:Request, res:Response) =>{
    try {
        const {authorId} = req.params
        const result = await CommentService.getCommentsByAuthor(authorId as string)
        res.status(200).json(result)
    } catch (error) {
        res.status(201).json({
             error:'Comment creation failed',
             details:error
        })
    }
}

const deleteComment = async (req:Request, res:Response) => {
    try {
        const user = req.user
        const {commentId} = req.params
        const result = await CommentService.deleteComment(commentId as string, user?.id as string)
        res.status(200).json(result)
    } catch (error) {
        res.status(201).json({
             error:'Comment creation failed',
             details:error
        })
    }
}

const updateComment = async (req:Request, res:Response) => {
    try {
        const user = req.user
        const {commentId} = req.params
        const result = await CommentService.updateComment(commentId as string, req.body, user?.id as string)
        res.status(200).json(result)
    } catch (error) {
        res.status(201).json({
             error:'Comment creation failed',
             details:error
        })
    }
}

export const  CommentController = {
    createComment,
    getCommentById,
    getCommentsByAuthor,
    deleteComment,
    updateComment
}