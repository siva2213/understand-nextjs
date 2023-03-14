import { comments } from '../../../data/comments'
export default function handler(req, res) {
    // console.log(req, 'req')
    if(req.method === 'GET') {
        const { commentId } = req.query
        const comment = comments.find(comment => Number(commentId) === comment.id)
        res.status(200).json(comment)
    }
    if( req.method === 'DELETE') {
        const { commentId } = req.query
        const newComments = comments.splice(comments.findIndex(i => i.id === Number(commentId)), 1)
        res.status(200).json(newComments)
    }
}