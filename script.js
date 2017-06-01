$(document).ready(function(){

	//Starts the process
	$('#btn-1').click(function(){
			$('.start').fadeOut('fast');
			$('.page-1').fadeIn('slow');
	});

	//Shows page 2
	$('#btn-2').click(function(){
			$('.page-1').fadeOut('fast');
			$('.page-2').fadeIn('slow');
	});

	//Shows page 3
	$('#btn-3').click(function(){
			$('.page-2').fadeOut('fast');
			$('.page-3').fadeIn('slow');
	});

	//Shows page 4
	$('#btn-4').click(function(){
			$('.page-3').fadeOut('fast');
			$('.page-4').fadeIn('slow');
	});

	//Shows final page
	$('#btn-5').click(function(){
			//Create Variables
			var title = "Example Landing Page";
			var slogan = "Making a your own webpage is simple!";
			var bio = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			var name = "Business Owner"
			if($('#name').val() !== ""){
				name = $('#name').val();
			}
			if($('#slogan').val() !== ""){
				slogan = $('#slogan').val();
			}
			if($('#bio').val()){
				bio = $('#bio').val();
			}
			if($('#title').val()){
				title = $('#title').val();
			}
			//Send parameters to the build function
			$('.page-4').fadeOut('fast');
			buildSite(title,slogan,bio, name);
	});

	//Place the input into a webpage
	function buildSite(title, slogan, bio, author){

		$('#newTitle').text(title);
		$('#newSlogan').text(slogan);
		$('#newBio').text(bio);
		$('#copyright').text("Created by "+author);
		$('.newPage').fadeIn('slow');
		
	}
});
