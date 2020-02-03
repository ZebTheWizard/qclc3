<template>
<form class="mt-24" @submit.prevent="handleContact" action="#" method="post">
        <label for="" class="mt-3 block">Name</label>
        <el-input 
            placeholder="Firstname Lastname" 
            prefix-icon="el-icon-search" 
            v-model="contact.name">
        </el-input>

        <label for="" class="mt-3 block">Phone</label>
        <el-input 
            placeholder="555-555-5555" 
            prefix-icon="el-icon-search"
            v-model="contact.phone">
        </el-input>

        <label for="" class="mt-3 block">Email</label>
        <el-input 
            placeholder="john@mail.com" 
            prefix-icon="el-icon-search" 
            v-model="contact.email">
        </el-input>

        <label for="" class="mt-3 block">Address</label>
        <el-input 
            placeholder="123 Easy St" 
            prefix-icon="el-icon-search" 
            v-model="contact.address">
        </el-input>

        <label for="" class="mt-3 block">Property Type</label>
        <el-radio-group v-model="contact.type">
            <el-radio-button label="Commercial"></el-radio-button>
            <el-radio-button label="Residential"></el-radio-button>
        </el-radio-group>

        <label for="" class="mt-3 block">Message</label>
        <el-input 
            type="textarea" 
            :rows="5" 
            placeholder="Please input" 
            v-model="contact.message">
        </el-input>

        <button type="submit" class="mx-auto block w-full text-2xl font-bold mt-8 bg-blue-400 rounded-lg shadow text-white px-3 py-1" style="max-width: 400px">Submit</button>
    </form>

</template>


<script>

export default {
    data() {
        return {
            contact: {
                name: null,
                phone: null,
                email: null,
                address: null,
                type: null,
                message: null
            }
        }
    },
    mounted() {
        console.log(this, this.contact)
    },
     methods: {
        handleContact (e) {
            console.log(this.contact)
        }
     }
}
</script>