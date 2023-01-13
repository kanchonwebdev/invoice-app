<template>
    <SideBar />
    <NavBar />
    <div class="data-container">
        <div class="header">
            <h2>Good Morning, Admin!</h2>
        </div>

        <div class="header border">
            <h3>View invoice</h3>
        </div>

        <form class="invoice-form">
            <div class="grid-2">
                <input type="number" maxlength="10" minlength="3" v-model="invoiceID" required
                    placeholder="Enter invoice ID here...." class="form-field">
                <input type="submit" value="Search invoice" class="search-btn" @click.prevent="viewInvoice()">
            </div>
        </form>

        <form action="" class="invoice-form">
            <div class="grid-2">
                <input type="text" maxlength="50" minlength="5" required placeholder="Name" v-model="invoiceName"
                    class="form-field">
                <input type="email" maxlength="40" minlength="5" required placeholder="Email" v-model="invoiceEmail"
                    class="form-field">
            </div>

            <div class="grid-2">
                <input type="text" maxlength="5" minlength="2" required placeholder="Price" v-model="invoicePrice"
                    class="form-field">
                <input type="text" maxlength="80" minlength="5" required placeholder="Address" v-model="invoiceAddress"
                    class="form-field">
            </div>

            <div class="grid-1">
                <textarea name="" id="" cols="10" rows="5" maxlength="200" minlength="5" required placeholder="Products"
                    v-model="invoiceProduct" class="form-field">
                </textarea>
            </div>

            <div class="grid-1">
                <input type="submit" value="Remove invoice" class="btn">
            </div>
        </form>
    </div>
    <FooTer />
</template>

<script>
    import SideBar from './SideBar.vue';
    import NavBar from './NavBar.vue';
    import FooTer from './FooTer.vue';
    import axios from 'axios'

    export default {
        name: 'DelData',
        components: {
            SideBar,
            NavBar,
            FooTer,
        },

        data() {
            return {
                invoiceData: [],
                invoiceID: '',
                invoiceName: '',
                invoiceEmail: '',
                invoicePrice: '',
                invoiceAddress: '',
                invoiceProduct: '',
            }
        },
        methods: {
            viewInvoice() {
                const invoiceId = this.invoiceID;
                axios.get('http://localhost:3000/items').then(res => {
                    const data = res.data;
                    const sampleId = invoiceId;
                    this.invoiceData = data.filter((obj) => {
                        return obj.id === sampleId;
                    }).pop();

                    this.invoiceID = this.invoiceData.id;
                    this.invoiceName = this.invoiceData.name;
                    this.invoiceEmail = this.invoiceData.email;
                    this.invoicePrice = this.invoiceData.price;
                    this.invoiceAddress = this.invoiceData.address;
                    this.invoiceProduct = this.invoiceData.products;
                })
            }
        },
    }
</script>

