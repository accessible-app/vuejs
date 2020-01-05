<template>
    <progress
            :value="value"
            :max="max"
            :aria-valuemax="max"
            :aria-valuenow="value"
            aria-busy="true"
            aria-valuemin="0"
            class="uk-progress oc-progress"
            tabindex="-1"
            role="progressbar"
    />
</template>

<script>
    export default {
        data() {
            return {
                currentValue: 0,
            }
        },
        mounted() {

        },
        props: {
            min: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: 100
            },
            value: {
                type: Number,
                required: true
            }
        }
    };
</script>

<style scoped>
    progress {
        display: block;
    }
</style>
