<template>
     <div v-if="required" className="ant-form-item-label"><label :title="title" className='ant-form-item-required' ><slot></slot></label></div>
     <div v-else className="ant-form-item-label"><label :title="title" ><slot></slot></label></div>
</template>
<script>
export default {
    props:['required','title']
}
</script>