<?php
/*
 * Template Name: Single new
 * Template Post Type: post */
  
get_header(); ?>

<body class="noFirstMain">

	<?php 
	
	$cats = get_the_category();
	$mainCat;
	foreach ($cats as $value){
		if($value->name == "News" || $value->name == "Blog"){
			$mainCat = $value;
		}
	}
	$postId = get_the_ID();
	$author = get_the_author_meta('first_name',$post->post_author).' '.get_the_author_meta('last_name',$post->post_author);
	
	?>
	
	<header class="active fix">
        <div class="container">
            <div class="cfix">
                <div class="left">
                    <div class="logo invisLink">
                        <a href="#"></a>
                        <img class="logo-b" src="img/logo-b.png" alt="">
                        <img class="logo-w" src="img/logo-w.png" alt="">
                    </div>
                </div>
                <div class="right">
                    <?php get_template_part('menu'); ?>
					<div class="bottomControls">
                        <!-- <div class="langs">
                            <button class="head">
                                <span class="icon-eng"></span>
                                eng
                            </button>
                            <ul class="list">
                                <li></li>
                            </ul>
                        </div> -->
                        <div class="socBlock">
                            <ul class="cfix">
                                <li class="item invisLink">
                                    <span class="icon-fb"></span>
                                    <a href="#">facebook</a>
                                </li>
                                <li class="item invisLink">
                                    <span class="icon-tw"></span>
                                    <a href="#">twitter</a>
                                </li>
                                <li class="item invisLink">
                                    <span class="icon-teleg"></span>
                                    <a href="#">telegram</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="menuBtn showMD">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <section class="fullTextWrapp">  
        <div class="container">        
            <div class="breadcrumbs">
                    <ul>
                        <li><a href="/">Main</a></li>
                      	<?php if($mainCat){?>
						<li><a href="/?page_id=89&cat_id=<?php echo $mainCat->cat_ID ?>"><?php echo $mainCat->name ?></a></li>
						<?php } ?>
                        <li><span><?php the_title() ?></span></li>
                    </ul>
            </div>     
            <div class="firstLabel">
                    <div class="row">
                        <div class="item col12">
                        <h1 class="firstCap"><?php the_title() ?></h1>
                        <div class="lineAuthor cfix">
                            <div class="dateBl">
                                <?php echo get_the_date('j F Y') ?>
                            </div>
                            <div class="author">
                                <div class="pic" style="background-image: url(img/image-chat.jpg)"></div>
                                <div class="txt"><?php echo $author ?></div>                               
                            </div>
                        </div>
                        <p>short description</p>
                    </div>
                </div>
            </div>
        </div>
        
        

        <div class="container">

		</div>
		
		
		
		<?php
			if($mainCat){
                $args = array(
                    'numberposts' => 3,
                    'offset' => 0,
                    'category' => $mainCat->cat_ID,
                    'exclude' => $postId,
                    'orderby' => 'post_date',
                    'order' => 'DESC',
                    );

                $recent_posts = get_posts( $args );
                if($recent_posts){ ?>
                    <div class="container">
                        <div class="seeAlso">
                            <h3 class="thirdCap">See also</h3>
                            <div class="list">
                                <?php foreach($recent_posts as $post){ 
                                    setup_postdata($post);
                                ?>
                                    <div class="item">
                                        <a href="<?php the_permalink() ?>" class="fourCap"><?php the_title() ?></a>
                                        <span class="dateBl"><?php echo get_the_date('j F Y') ?></span>
                                    </div>
                                <?php 
                                    wp_reset_postdata();
                                    }
                                ?>
                            </div>
                        </div>
                    </div>
                <?php 
                } 
			} 
		?>
    </section>
	<?php get_footer(); ?>
</body>
</html>
