import Keyword from './keyword.model';

const create = async  (user,keyword) => {
  let data = keyword;
  if(user){
    data.postedBy = user._id;
  }
  try{
      const exists = await Keyword.findOne({text:data.text});
      if(!exists){
      const keyword = new Keyword(data);
      const newKeyword = await keyword.save();
      }
  }catch(err){
      console.log(err);
  }
}

export default {
  create
}