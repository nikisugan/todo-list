<template>
    <div class="item">
        <input
            type="checkbox"
            @change="updateCheck()"
            v-model="item.completed"
            :class="`chBox list-${item.id}`"
        />
        <span :class="[item.completed ? 'completed': '' , 'item-text']"> {{ item.name }} </span>
        <button @click="removeItem()" class="trashcan">
            <i class="fas fa-trash"></i>
        </button>
    </div>
</template>

<script>
export default {
    props:['item'],
    mounted(){
       this.checkStatus();
    },
    updated(){
       this.checkStatus();

    },
    methods:{
        updateCheck(){
            document.querySelectorAll('.chBox').forEach( e =>{
                if(e.classList.contains(`list-${this.item.id}`)){
                    e.checked = this.item.completed;
                }
            })
            // console.log(this.item.completed)
            axios.put('api/item/' + this.item.id, {
                item:this.item
            })
            .then((result) => {
                if( result.status == 200){
                    this.$emit('itemchanged');
                }
            }).catch((err) => {
                console.error(err)
            });
        },
        removeItem(){
            axios.delete('api/item/' + this.item.id, {
                item:this.item
            })
            .then((result) => {
                if( result.status == 200){
                    this.$emit('itemchanged');
                }
            }).catch((err) => {
                console.error(err)
            });
        },
        checkStatus(){
            document.querySelectorAll('.chBox').forEach(element => {
                if(element.classList.contains(`list-${this.item.id}`)){
                    element.checked = this.item.completed === 1  ? true : false;
                }
            })
        },
    },
}
</script>
<style scoped>
.completed{
    text-decoration: line-through;
    color:#999999 ;
}
.item-text{
    width: 100%;
    margin-left: 20px;
}
.item{
    display: flex;
    justify-content: center;
    align-items: center;
}
.trashcan{
    background: #e6e6e6;
    border: none;
    color: #FF0000;
    outline: none;
}
</style>