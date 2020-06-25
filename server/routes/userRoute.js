module.exports=(app)=>{
    app.get('/api/current_user', (req, res)=>{
        res.send(req.user);
    });

    app.get('/logout', (req, res)=>{
        req.logout();
        res.redirect('/');
    })

    app.post('/addFriend', (req, res)=>{

    });

    app.get('/friendList', (req, res)=>{

    });
}
