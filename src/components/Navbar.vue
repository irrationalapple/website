<template>
	<nav id="navigation" style="position: fixed; left: 0px; top: 0px; height: 85px; background-color: white; border-bottom: 1px solid lightgray;" class="full-width" >
		<div style="position: absolute; left: 10px; width: 50px;" class="relative-full-height">
			<a style="position: absolute; left: 0px; padding: 0px 20px; display: table;" class="relative-full-height title bold float-left option nope">
				<span style="display: table-cell; vertical-align: middle; text-align: center;">
					illogical<span class="blue" style="color: var(--secondary);">apple</span>
				</span>
			</a>
		</div>
		<div style="position: absolute; right: 10px; top: 0px;" class="relative-full-height">
			<a href="javascript:void(0)" style="display: table; padding: 0px 20px; cursor: pointer;" class="relative-full-height float-right option stuff-option" @mouseover="toggleMenu(true)" @mouseleave="toggleMenu(false)">
				<span style="display: table-cell; vertical-align: middle; text-align: center;" class="{{ page == 'stuff' ? 'bold' : '' }}">
					stuff i made
				</span>
				<div class="menu" style="text-align: left; padding: 1.5em 3em; overflow-y: auto; overflow-x: hidden;" :data-open=" menuOpen ? 'bob' : 'not bob'">
					<span v-for="(page, index) in pages">
						<router-link :to="page.url">
							<h2 style="margin-bottom: 0.5em;color: var(--secondary);" class="blue">{{ page.title }}</h2>
							{{ page.desc }}
						</router-link>
						<span v-if="index < pages.length - 1"><br></span>
						<span v-else><!-- haha no line break sucker --></span>
					</span>
				</div>
			</a>
			<router-link to="/blog" style="display: table; padding: 0px 20px;" class="relative-full-height float-right option home-option">
				<span style="display: table-cell; vertical-align: middle; text-align: center;" class="{{ page == 'home' ? 'bold' : '' }}">
					blog
				</span>
			</router-link>
			<router-link to="/" style="display: table; padding: 0px 20px;" class="relative-full-height float-right option home-option">
				<span style="display: table-cell; vertical-align: middle; text-align: center;" class="{{ page == 'home' ? 'bold' : '' }}">
					home
				</span>
			</router-link>
		</div>
		<img src="/menu.svg">
		<!--Menu></Menu-->
	</nav>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);
const toggleMenu = stuf => {
	menuOpen.value = stuf;
};
const pages = [
	{
		"url": "/true-facts",
		"title": "true facts",
		"desc": "true facts about everything"
	},
	{
		"url": "/scribble",
		"title": "scribble",
		"desc": "ruins your drawings"
	},
	{
		"url": "/car-game",
		"title": "car game",
		"desc": "vroom vroom boom"
	}
];
</script>

<style scoped>
	#navigation a > span {
		font-size: 21px;
		font-family: Poppins;
	}
</style>
