<template>
    <div>
        <span :id="id"> <slot></slot> </span>
        <button
                role="switch"
                :aria-checked="isChecked.toString()"
                :aria-labelledby="id"
                @click="toggle"
        >
            <span>{{ onLabel }}</span> <span>{{ offLabel }}</span>
        </button>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                id: null,
                isChecked: this.value
            };
        },
        props: {
            value: {
                type: Boolean,
                default: false
            },
            onLabel: {
                type: String,
                default: "on"
            },
            offLabel: {
                type: String,
                default: "off"
            }
        },
        methods: {
            toggle() {
                this.$emit("click", !this.isChecked);
                this.isChecked = !this.isChecked;
            }
        },
        mounted() {
            this.id = Math.random()
                .toString(36)
                .substring(2, 15);
        }
    };
</script>

<style scoped>
    button {
        padding: 0.25rem 0.5rem;
        border: 0.25rem solid;
        border-radius: 0.25rem;
        font: inherit;
    }

    [aria-checked] span {
        font-size: 0.75rem;
        font-weight: bold;
        display: inline-block;
        border-radius: 0.25rem;
        padding: 0.25rem;
    }

    [aria-checked="true"] :first-child,
    [aria-checked="false"] :last-child {
        background-color: #000;
        border: 2px solid transparent;
        color: #fff;
    }
</style>
