<template>
    <SideBar />
    <NavBar />
    <div class="data-container">
        <div class="header">
            <h2>Good Morning, Admin!</h2>
        </div>

        <div class="header border">
            <h3>Add new invoice</h3>
        </div>
        
        <form action="" class="invoice-form">
            <div class="grid-2">
                <input type="text" maxlength="50" minlength="5" required placeholder="Name" class="form-field">
                <input type="email" maxlength="40" minlength="5" required placeholder="Email" class="form-field">
            </div>

            <div class="grid-2">
                <input type="text" maxlength="5" minlength="2" required placeholder="Price" class="form-field">
                <input type="text" maxlength="80" minlength="5" required placeholder="Address" class="form-field">
            </div>

            <div class="grid-1">
                <textarea name="" id="" cols="10" rows="5" maxlength="200" minlength="5" required placeholder="Products" class="form-field"></textarea>
            </div>

            <div class="grid-1">
                <input type="submit" value="Add invoice" class="btn">
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
        name: 'AddData',
        components: {
            SideBar,
            NavBar,
            FooTer,
        },

        data() {
            return {
                infos: [],
                i: 0,
                modalCls: false,
                invoiceData: [],
            }
        },
        mounted() {
            axios
                .get('http://localhost:3000/items')
                .then((response) => {
                    this.infos = response.data;
                })
        },
        methods: {
            vewInvoice(invoiceId) {
                console.log(invoiceId);
                this.modalCls = !this.modalCls;

                axios.get('http://localhost:3000/items').then(res => {
                    const data = res.data;
                    const sampleId = invoiceId;
                    this.invoiceData = data.filter((obj) => {
                        return obj.id === sampleId;
                    }).pop();
                })
            },

            modal_close() {
                this.modalCls = !this.modalCls;
            },

            invoice_print() {
                window.print();
            }
        },
    }
</script>

