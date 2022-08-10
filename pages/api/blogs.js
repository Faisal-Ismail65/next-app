// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';
export default async function handler(req, res) {
  let allblogs = [];
  let myfile;
  let data = await fs.promises.readdir('blogdata');
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    myfile = await fs.promises.readFile(('blogdata/'+element),'utf-8');
    allblogs.push(JSON.parse(myfile));
  }
  res.status(200).json(allblogs);
}
