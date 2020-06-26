const requireLogin=require('../middlewares/requireLogin');

module.exports=(app)=>{
    app.get('/api/current_user', (req, res)=>{
        res.send(req.user);
    });

    app.get('/logout', (req, res)=>{
        req.logout();
        res.redirect('/');
    })

    app.post('/api/addFriend', requireLogin, async (req, res)=>{
        req.user.friends.add(req.user.id);
        const user = await req.user.save();
        res.send(user);
    });

    app.get('/api/friendList', requireLogin, (req, res)=>{
        req.user.friends.forEach(id => {
            
        });
    });
}
