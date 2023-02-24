import { prismaClient } from '../src/database/prismaClient'

const ingredients = [
  {
    name: "alface",
	  image: "alface.png"
  },
  {
    name: "ameixa",
	  image: "ameixa.png"
  },
  {
    name: "amendoas",
	  image: "amendoas.png"
  },
  {
    name: "aniz",
	  image: "aniz.png"
  },
  {
    name: "café",
	  image: "cafe.png"
  },
  {
    name: "camarão",
	  image: "camarao.png"
  },
  {
    name: "canela",
	  image: "canela.png"
  },
  {
    name: "claras",
	  image: "claras.png"
  },
  {
    name: "damasco",
	  image: "damasco.png"
  },
  {
    name: "farinha",
	  image: "farinha.png"
  },
  {
    name: "limão",
	  image: "limao.png"
  },
  {
    name: "maça",
	  image: "maca.png"
  },
  {
    name: "maracujá",
	  image: "maracuja.png"
  },
  {
    name: "massa",
	  image: "massa.png"
  },
  {
    name: "pão",
	  image: "pao.png"
  },
  {
    name: "pão naan",
	  image: "pao-naan.png"
  },
  {
    name: "pepino",
	  image: "pepino.png"
  },
  {
    name: "pessego",
	  image: "pessego.png"
  },
  {
    name: "pesto",
	  image: "pesto.png"
  },
  {
    name: "presunto",
	  image: "presunto.png"
  },
  {
    name: "rabanete",
	  image: "rabanete.png"
  },
  {
    name: "rúcula",
	  image: "rucula.png"
  },
  {
    name: "tomate",
	  image: "tomate.png"
  },
  {
    name: "whiskey",
	  image: "whiskey.png"
  },
]

async function ingredientsSeeding() {

  await prismaClient.ingredient.createMany({
    data: ingredients
  })
}

ingredientsSeeding()
  .then(async () => {
    await prismaClient.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prismaClient.$disconnect()
    process.exit(1)
  })