const todoState = {
    item: [],
    skill: []
}

const todoReducer = (state = todoState, action) => {
    console.log(state);
    if (action.type === 'ADD_ITEM') {
        action.value.id = Math.random();
        action.value.pre = []; //initializing pre-requite
        let combineItem = [...state.item, action.value]
        return {
            ...state,
            item: combineItem
        }
    }

    if (action.type === 'DELETE_ITEM') {
        let delItem = state.item.filter(item => {
            return item.id !== action.id
        })
        return {
            ...state,
            item: delItem
        }
    }

    if (action.type === 'ADD_SKILL') {

        action.value.id = Math.random();
        let combineSkill = [...state.skill, action.value]
        return {
            ...state,
            skill: combineSkill
        }
    }

    if (action.type === 'DELETE_SKILL') {
        let delSkill = state.skill.filter(skill => {
            return skill.id !== action.id
        })
        return {
            ...state,
            skill: delSkill
        }
    }

    if(action.type === 'ADD_PRE'){
        let target = state.item.filter(item => {//push the item to specified array
            return  (item.id).toString() === (action.value.id).toString()
        })
        
        target[0].pre.push(action.value.value)

        let targetRemain = state.item.filter(item => {//find the remain item
            return  (item.id).toString() !== (action.value.id).toString()
        })

        let combineItem = [...targetRemain, target[0]]//combine object together
        return{
           ...state,
           item: combineItem
        }
    }

    if(action.type === 'DELETE_PRE'){
        let array = state.item.filter(item => {
            return item.id === Number(action.pre.id)
        })
        let arrayNew = (array[0].pre.filter(pre => {
            return pre !== action.pre.value
        }))
        array[0].pre = arrayNew

        let targetRemain = state.item.filter(item => {//find the remain item
            return  item.id !== Number(action.pre.id) 
        })

        let combineItem = [...targetRemain, array[0]]
        
        return{
            ...state,
            item:combineItem
        }

    }
    return state;
}

export default todoReducer;