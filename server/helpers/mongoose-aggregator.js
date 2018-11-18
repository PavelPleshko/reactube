
const Aggregator = function(){
	let _value = [];

	function pushValues(){
		const args = Array.from(arguments).slice();
		args.forEach(arg=>_value.push(arg));
	};

	function getValue(){
		return _value;
	}

	return new MongooseAggregator(pushValues,getValue);

}


class MongooseAggregator{

		constructor(pushValuesFn,getValueFn){
			this._pushValues = pushValuesFn;
			this.value = getValueFn;
			this.currentStep = 0;
			this.steps=[];
		}

		match(cond){
			cond || (cond={});
			const matchStage = {$match:cond};
			this._pushValues(matchStage);
			this._increaseStep('match');
			return this;
		}

		or(cond){
			throw Error('Not implemented yet');
		}

		addFields(value){
			const addFieldsStage = {$addFields:value};
			this._pushValues(addFieldsStage);
			this._increaseStep('addFields');
			return this;
		}

		sort(fieldName,order){
			order || (order = 1);
			const sortStage = {$sort:{[fieldName]:order}};
			this._pushValues(sortStage);
			this._increaseStep('sort');
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
			this._pushValues(populateStage,normalizeStage);
			this._increaseStep('populate');
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
			this._pushValues(projectStage);
			this._increaseStep('project');
			return this;
		}

		sample(size){
			const sampleStage = {$sample:{size:size}};
			this._pushValues(sampleStage);
			this._increaseStep('sample');
			return this;
		}

		limit(amount){
			const limitStage =  {$limit:amount};
			this._pushValues(limitStage);
			this._increaseStep('limit');
			return this;
		}

		skip(amount){
			const skipStage =  {$skip:amount};
			this._pushValues(skipStage);
			this._increaseStep('skip');
			return this;
		}

		count(asField){
			asField || (asField = 'total');
			const countStage = {$group:{
              _id:null,
              [asField]:{$sum:1}
            }
    	    };
    	    this._increaseStep('count');
            this._pushValues(countStage);
            return this;
		}

		facet(facetLike){
			if(!facetLike instanceof FacetAggregator){
				const constructorName = (facetLike && facetLike.constructor && facetLike.constructor.name)
				 || 'undefined';
				throw Error(`Function expects instance of FacetAggregator, but got ${constructorName}.
							To add facet please use special class FacetAggregator.`)
			}else{
				const value = facetLike.value();
				const facetStage = {$facet:value};
				this._pushValues(facetStage);
				this._increaseStep('facet');
				return this;
			}
		}

		_increaseStep(stepName){			
			if(stepName){
				this.steps[this.currentStep]=stepName;
			}
			this.currentStep++;
		}

	}


export const Facet = function(){
	let _value = {};
	let _currentField = null;

	function pushValues(){
		const args = Array.from(arguments).slice();
		if(_currentField){
			let facetSlice = _value[_currentField];
			if(!facetSlice){
				facetSlice = _value[_currentField] = [];
			}
			args.forEach(arg=>facetSlice.push(arg));
		}
	}

	function openField(fieldName){
		if(!_value[fieldName]){
			_value[fieldName]=[];
			_currentField = fieldName;
		}
	}

	function getValue(){
		return _value;
	}

	return new FacetAggregator(pushValues,getValue,openField);
}


class FacetAggregator extends MongooseAggregator{
	constructor(pushValuesFn,getValueFn,openFieldFn){
		super(pushValuesFn,getValueFn);
		this.newFieldFn = openFieldFn;
	}

	newField(fieldName){
		this.newFieldFn(fieldName);
		return this;
	}



}


export default Aggregator;