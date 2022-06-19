<template>
<div class="_container">
    <DataTable :value="data" responsiveLayout="scroll">
        <Column header="Дата операции">
            <template #body = "slotProps">
                {{dateFormat(slotProps.data.date, 'dd-mm-yyyy' )}}
            </template>
        </Column>
        <Column field="place" header="Место"></Column>
        <Column field="category" header="Категория"></Column>
        <Column field="amount" header="Сумма"></Column>
        <Column field="card" header="Карта"></Column>
        <Column field="description" header="Описание"></Column>
    </DataTable>  
</div>  
</template>
<script>
    import DataTable from 'primevue/datatable'
    import Column from 'primevue/column'
    import dateFormat from 'dateformat'

    import { useStore } from "vuex"

    export default{
        components:{DataTable, Column},
        setup(){
            const store = useStore();
            const data = store.state.operations.data;
            return{
                data, dateFormat
            }
        }
    }
</script>