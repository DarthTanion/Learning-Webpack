<template>
    <div id="appTemplate">
        <p>{{ msg }}</p>
    </div>
</template>

<script>
export default {
	name: "App",
	data() {
		return {
			msg: "This is a message using interpolation!!"
		};
	}
};
</script>

<style scoped>
p {
	font-weight: bolder;
}
</style>

