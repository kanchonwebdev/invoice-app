<template>
    <SideBar />
    <NavBar />
    <div class="data-container">
        <div class="header">
            <h2>Good Morning, Admin!</h2>
        </div>

        <div class="wrapper">
            <div class="block">
                <h2>1</h2>
                <p>Total invoice</p>
            </div>
            <div class="block">
                <h2>3</h2>
                <p>Today total invoice</p>
            </div>
            <div class="block">
                <h2>20</h2>
                <p>Weekly total invoice</p>
            </div>
            <div class="block">
                <h2>50</h2>
                <p>Monthly total invoice</p>
            </div>
        </div>

        <table class="invoice-table">
            <tbody>
                <tr>
                    <th>Serial No.</th>
                    <th>Invoice ID</th>
                    <th>Invoice Name</th>
                    <th>Action</th>
                </tr>

                <tr v-for="info in infos" :key="info.id">
                    <td>{{i++}}</td>
                    <td>{{info.id}}</td>
                    <td>{{info.name}}</td>
                    
                    <td>
                        <span class="btn" @click="vewInvoice(info.id)">View</span>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="invoice-modal" id="invoice-modal" v-bind:class="[modalCls ? 'activeModal' : 'hideModal' ]">
            <div class="modal-content">
                <h2>Welcome to Invoice Application</h2>
                
                <div class="modal-wrapper">
                    <div class="modal-block"><b>Name</b> : {{invoiceData.name}}</div>
                    <div class="modal-block"><b>Email</b> : {{invoiceData.email}}</div>
                    <div class="modal-block"><b>Address</b> : {{invoiceData.address}}</div>
                    <div class="modal-block"><b>Products</b> : {{invoiceData.products}}</div>
                    <div class="modal-block"><b>Price</b> : {{invoiceData.price}}</div>
                    <div class="modal-block"><b>Order Date</b> : {{invoiceData.date}}</div>
                </div>

                <div class="modal-footer">
                    <p><b>Thank & Regards</b></p>
                    <p>Mr. KK, invoice app CEO</p>
                </div>

                <div class="btn-block">
                    <div class="btn" @click="invoice_print()">Print Now</div>
                </div>

                <div class="close" @click="modal_close()">Close</div>
            </div>
        </div>
    </div>
    <FooTer />
</template>

<script>
    import SideBar from './SideBar.vue';
    import NavBar from './NavBar.vue';
    import FooTer from './FooTer.vue';
    import axios from 'axios'

    export default {
        name: 'DataContainer',
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
            vewInvoice(invoiceId){
                this.modalCls = !this.modalCls;

                axios.get('http://localhost:3000/items').then(res => {
                    const data = res.data;
                    const sampleId = invoiceId;
                    this.invoiceData = data.filter((obj) => {
                        return obj.id === sampleId;
                    }).pop();
                })
            },

            modal_close(){
                this.modalCls = !this.modalCls;
            },

            invoice_print(){
                window.print();
            }
        },
    }
</script>

