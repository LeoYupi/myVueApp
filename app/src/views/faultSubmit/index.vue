<template>
    <div>
        <navbar msg="故障上报"></navbar>
        <myForm></myForm>
    </div>
</template>

<script>
import navbar from '../../components/navbar.vue';
import myForm from './components/myForm.vue';

export default {
    components:{navbar,myForm}
}
</script>