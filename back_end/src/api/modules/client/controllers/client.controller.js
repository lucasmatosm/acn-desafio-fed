'use strict';

class ClientController {
    constructor() {
        this.Todo = require('../../../../models/client.model');
        this.create = this.create.bind(this);
        this.getAll = this.getAll.bind(this);
        this.getOne = this.getOne.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async create(req, res) {
        try {
            await new this.Todo(req.body).save();
            res.sendStatus(201);
        } catch (err) {
            res.status(400).json(err);
        }
    }

    async getAll(req, res) {
        try {
            const result = await this.Todo.find().lean();
            res.json(result);
        } catch (err) {
            res.status(400).json(err);
        }
    }

    async getOne({ params: { id } }, res) {
        try {
            const result = await this.Todo.findById(id).lean();
            res.json(result);
        } catch (err) {
            res.status(400).json(err);
        }
    }

    async update({ params: { id }, body }, res) {
        try {
            await this.Todo.findByIdAndUpdate(id, body);
            res.sendStatus(200);
        } catch (err) {
            res.status(400).json(err);
        }
    }

    async delete({ params: { id } }, res) {
        try {
            await this.Todo.findByIdAndDelete(id).lean();
            res.sendStatus(200);
        } catch (err) {
            res.status(400).json(err);
        }
    }
}

module.exports = new ClientController();