const Thought = require("../model/Thought");

module.exports = {
    async dashboard(req, res) {
        const thoughts = await Thought.findAll({ raw: true });
        return res.render("thoughts/dashboard", { thoughts });
    },
    
    async registerThought(req, res) {
        return res.render("thoughts/register");
    },

    async findAllThoughts(req, res) {
        const thoughts = await Thought.findAll({ raw: true});
        
        return res.json(thoughts)
    },

    async showPageEditThought(req, res) {
        const { id } = req.params;

        const thought = await Thought.findOne({ where: {id} })
        return res.render("thought/edit", { thought });
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

    async findThoughts(req, res) {
        const { id } = req.params;

        const thought = await Thought.findOne({where:{id:id}});

        return res.json(thought)
    },

    async deleteThoughts(req,res) {
        const {id} = req.params;
        const thought = await Thought.destroy({ where:  {id} });

        return res.json({message: "Pensamento deletado"})
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


        return res.json(thought);
    }

};