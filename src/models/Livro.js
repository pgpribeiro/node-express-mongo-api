import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId},
  nome: { type: String, required: true },
  autor: { type: String,},
  editora: { type: String },
}, {versionKey: false});

const livro = mongoose.model("livros", livroSchema);

export default livro;
