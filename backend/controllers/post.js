const Post = require('../models/post');
const slugify = require('slugify');
exports.create = async (req, res) => {
    // console.log(req.body);
    const { title, content, user } = req.body;
    const slug = slugify(title);
    // validate
    switch (true) {
        case !title:
            return res.status(400).json({ error: 'Title is required' });

        case !content:
            return res.status(400).json({ error: 'Content is required' });

    }
    // create post
    const post = await Post.create({ title, content, user, slug })
    console.log(post)
    if (post)
        return res.status(200).json(post)
    return res.status(400).json({ error: "post create error" })
};

exports.list = async (req, res) => {
    const posts = await Post.find({})
        .limit(10)
        .sort({ createdAt: 'desc' })
        .exec();

    if (posts)
        return res.status(200).json(posts)
    return res.status(400).json({ error: "list posts error" })
};

exports.read = async (req, res) => {
    // console.log(req.params.slug)
    // const slug = req.params.slug
    const { slug } = req.params;
    console.log(slug)
    const post = await Post.findOne({ slug }).exec()
    if (!post)
        return res.status(400).json({ error: "post error" })
    return res.status(200).json(post)
}; 