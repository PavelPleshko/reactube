
const Aggregator = function(){
	let _value = [];

	function _pushValues(){
		const args = Array.from(arguments).slice();
		args.forEach(arg=>_value.push(arg));
	};

	return new class MongooseAggregator{

		value(){
			return _value;
		}

		match(cond){
			cond || (cond={});
			const matchStage = {$match:cond};
			_pushValues(matchStage);
			return this;
		}

		addFields(value){
			const addFieldsStage = {$addFields:value};
			_pushValues(addFieldsStage);
			return this;
		}

		sort(fieldName,order){
			order || (order = 1);
			const sortStage = {$sort:{[fieldName]:order}};
			_pushValues(sortStage);
			return this;
		}

		populate(from,localField,foreignField,exclude){
			const fieldSign='$';
			const populateStage = {
				$lookup:{
                  from:from,
                  localField:localField,
                  foreignField:foreignField,
                  as:localField
              }
			}
			const normalizeStage = {
				$unwind:`${fieldSign}${localField}`
			};
			_pushValues(populateStage,normalizeStage);
			return this;
		}

		project(includeArr,excludeArr){
			if(!includeArr && !excludeArr) throw Error('Please provide includeArray or excludeArray arguments');

			const includeObj = {},excludeObj={};

			if(includeArr)
			includeArr.forEach(fieldName=>{
				includeObj[fieldName] = 1;
			})

			if(excludeArr)		
			excludeArr.forEach(fieldName=>{
				excludeObj[fieldName] = 0;
			})
			const projectObj = Object.assign({},includeObj,excludeObj);
			const projectStage = {$project:projectObj};
			_pushValues(projectStage);
			return this;
		}

		sample(size){
			const sampleStage = {$sample:{size:size}};
			_pushValues(sampleStage);
			return this;
		}

		limit(amount){
			const limitStage =  {$limit:amount};
			_pushValues(limitStage);
			return this;
		}

		skip(amount){
			const skipStage =  {$skip:amount};
			_pushValues(skipStage);
			return this;
		}

	}

}


export default Aggregator;