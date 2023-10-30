const Thought = require("../model/Thought");

module.exports = {
    async dashboard(req, res) {
        const thoughts = await Thought.findAll({ raw: true });
        return res.render("thoughts/dashboard", { thoughts });
    },
    
    async registerThought(req, res) {
        return res.render("thoughts/register");
    },

    async showPageEditThought(req, res) {
        const { id } = req.params;

        const thoughts = await Thought.findOne({ where: {id} })
        const result = [thoughts.dataValues]
        return res.render("thoughts/edit", { result });
    },

    async createThought(req, res)
    {
        const { title, description } = req.body;
        const thought = await Thought.create({title, description});

        try{
            if(thought) {
                return res.redirect("/thoughts/dashboard");
            }
        }catch(error) {
            console.error(error)
        };

        return res.json(thought);
    },

    async deleteThoughts(req,res) {
        const {id} = req.params;
        const thought = await Thought.destroy({ where:  {id} });

        try{
            if(thought) {
                return res.redirect("/thoughts/dashboard");
            }
        }catch(error){
            console.error(error)
        }

    },

     async updateThought(req, res)
    {
        const {id} = req.params;
        const { title, description } = req.body;
        const thought = await Thought.update({
            title,
            description
        },
        {
            where: {id}
        }
        );

        try{
            if(thought) {
                return res.redirect("/thoughts/dashboard");
            }
        }catch(error) {
            console.error(error)
        }
    }

};