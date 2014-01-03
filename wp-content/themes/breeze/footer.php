		</div><!-- #primary -->
	</div><!-- #main .site-main -->
<?php
	//get theme options
	$footer_text = of_get_option('footer_text', '' ); ?>
	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="container">
			<div class="row-fluid" id="footer-body">
				<?php dynamic_sidebar('footer-widgets'); ?>
			</div>
		</div><!-- .site-info -->
		<?php if(!empty($footer_text)){?>
		<div class="row-fluid" id="footer-bottom">
			<?php echo html_entity_decode(str_replace("{year}", date('Y'), $footer_text)); ?>
		</div>	
		<?php } 
		?>
	</footer><!-- #colophon .site-footer -->
</div><!-- #page -->
<?php wp_footer(); ?>
<script src="//static.getclicky.com/js" type="text/javascript"></script>
<script type="text/javascript">
try
{
  clicky.init(100688099);
}
catch (e)
{}
</script>
<noscript>
  <p>
    <img alt="Clicky" width="1" height="1" src="//in.getclicky.com/100688099ns.gif" />
  </p>
</noscript>
<script>
(function(i, s, o, g, r, a, m)
{
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function()
  {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o),
  m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-46653595-1', 'sexy-english.com');
ga('send', 'pageview');
</script>
</body>
</html>