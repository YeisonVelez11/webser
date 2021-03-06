<!DOCTYPE html>
<html ng-app="aplicacion">
  <head>
    <META HTTP-EQUIV="Content-Type" content="text/html; charset=utf-8"/>   
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>BIOS</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="css/font-awesome.min.css">
	<link href="css/main.css" rel="stylesheet">
    <title>Georreferenciación Municipios de Caldas</title>
    <link rel="stylesheet" type="text/css" href="css/example.css"/>
	

	 

	
	<script src="javascripts/jquery-1.8.3.js"></script>
	<script src="javascripts/jquery-ui-1.9.2.custom.min.js"></script>
    <script src="javascripts/jquery-ui-1.9.2.custom.js"></script>
	<link href="css/black-tie/jquery-ui-1.9.2.custom.min.css" rel="stylesheet">
    
      
    	<link rel="stylesheet" type="text/css" href="//cdn.datatables.net/plug-ins/1.10.7/integration/jqueryui/dataTables.jqueryui.css">

		<script type="text/javascript" language="javascript" src="//cdn.datatables.net/1.10.7/js/jquery.dataTables.min.js"></script>
		<script type="text/javascript" language="javascript" src="//cdn.datatables.net/plug-ins/1.10.7/integration/jqueryui/dataTables.jqueryui.js"></script>
      
      
	
    <script src="javascripts/jquery.csv-0.71.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false&language=es"></script>
      	<script type="text/javascript" src="javascripts/angular.min.js"></script>

    <script type="text/javascript" src="javascripts/script_dengue.js"></script>

	<!--
	<!--// dibujar poligonos http://www.birdtheme.org/useful/v3tool.html
http://www.gadm.org/download
-->

  </head>
  <body class="homepage"> 
   <div id="resultadosMun" ng-controller="Municipios" ng-init="cargarMunicipio()">
		
		
        <header id="header">
            <nav class="navbar navbar-fixed-top" role="banner">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="index.html">DEMO DENGUE </a>
                    </div>

                    <div class="collapse navbar-collapse navbar-right">
                        <ul class="nav navbar-nav">
                         <!--   <li style='display: none;'class='ocultar'><label for='rios' style='color: white;'>Mostrar Rios <input type='checkbox'   id='rios' ></label></li>
                            <li class='ocultar' style='display: none;'><label for='municipios' style='color: white;'>Mostrar municipio <input type='checkbox' checked  id='municipios' ></label></li >-->
                                    <!--<li class="active"><a href="index_dengue.html">Dengue</a></li> -->
                                                        <li class='ocultar' style='display: none;'><a href="#" id='mostrarTabla'>Ver Datos</a></li> 
 
                            <li ><a href="#" id='cargar'>Cargar</a></li> 
                            <li ><a href="index.html">Chikungunya</a></li> 
                            <li><a href="http://bios.co">BIOS</a></li>               

                            <!--<li><a href="index.html">Inicio</a></li>
                            <li><a href="about-us.html">Acerca de Nosotros</a></li>
                            <li><a href="blog.html">Blog</a></li> -->
                        </ul>
                    </div>
                </div><!--/.container-->
            </nav><!--/nav-->

        </header><!--/header-->
        <!--	
        <div class="map">
            <iframe src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Kuningan,+Jakarta+Capital+Region,+Indonesia&amp;aq=3&amp;oq=kuningan+&amp;sll=37.0625,-95.677068&amp;sspn=37.410045,86.572266&amp;ie=UTF8&amp;hq=&amp;hnear=Kuningan&amp;t=m&amp;z=14&amp;ll=-6.238824,106.830177&amp;output=embed">
            </iframe>
        </div>
        -->
        <div class="map" >
        <div id='map'> 

            </div>
        </div>
        <!--<section id="contact-page">
            <div class="container">-->





        <center>
                <div id='tabla_reporte_chikun'>
                    
                    <div  id='tablas' title='Municipios' style='display: none'> 
        
                            </div>
                    
   
   

                </div>
            
            </center>
       
       
       
        <div id='cargar_datos' title='Cargar Datos'>
            <div id="tabs">
           <ul>
            <li><a href="#mun">Municipios</a></li>
            <li><a href="#rios">Rios</a></li>
           </ul>
            <div id="mun">
          
            <center> <label for='marcarTodo'>Marcar/Desmarcar todos  <input type='checkbox' id='marcarTodo' class='marcarTodo'></label></center>             <br> 
                </div> 
                <div id="rios">
            
           
           
                <center> <label for='marcarRios'>Marcar/Desmarcar todos  <input type='checkbox' id='marcarRios' class='marcarRios'></label></center>
                </div>
           </div>
       </div>  
             <p>
            <div id="dvImportSegments" title='Carga de Municipio' class="fileupload" style='display:none'>
                <fieldset>
                    <legend><center>Seleccione Municipio a cargar</center></legend>
                   <center> <input type="file" name="File Upload" id="txtFileUpload" class="file" accept=".csv"/></center>
                </fieldset>
            </div>
            </p>
		
		
	
    </div>
		
		
		
		
		
           <!--<div class="center">        
                <h2>Drop Your Message</h2>
                <p class="lead">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div> 
            <div class="row contact-wrap"> 
                <div class="status alert alert-success" style="display: none"></div>
                <form id="main-contact-form" class="contact-form" name="contact-form" method="post" action="sendemail.php">
                    <div class="col-sm-5 col-sm-offset-1">
                        <div class="form-group">
                            <label>Name *</label>
                            <input type="text" name="name" class="form-control" required="required">
                        </div>
                        <div class="form-group">
                            <label>Email *</label>
                            <input type="email" name="email" class="form-control" required="required">
                        </div>
                        <div class="form-group">
                            <label>Phone</label>
                            <input type="number" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Company Name</label>
                            <input type="text" class="form-control">
                        </div>                        
                    </div>
                    <div class="col-sm-5">
                        <div class="form-group">
                            <label>Subject *</label>
                            <input type="text" name="subject" class="form-control" required="required">
                        </div>
                        <div class="form-group">
                            <label>Message *</label>
                            <textarea name="message" id="message" required="required" class="form-control" rows="8"></textarea>
                        </div>                        
                        <div class="form-group">
                            <button type="submit" name="submit" class="btn btn-primary btn-lg" required="required">Submit Message</button>
                        </div>
                    </div>
                </form> 
            </div><!--/.row-->
      <!-- </div>
    </section><!--/#contact-page-->

   <!-- <section id="bottom">
     <!-- <div class="container wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <div class="widget">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">We are hiring</a></li>
                            <li><a href="#">Meet the team</a></li>
                            <li><a href="#">Copyright</a></li>                           
                        </ul>
                    </div>    
                </div><!--/.col-md-3-->

      <!--         <div class="col-md-3 col-sm-6">
                    <div class="widget">
                        <h3>Support</h3>
                        <ul>
                            <li><a href="#">Faq</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Forum</a></li>
                            <li><a href="#">Documentation</a></li>                          
                        </ul>
                    </div>    
                </div><!--/.col-md-3-->

       <!--        <div class="col-md-3 col-sm-6">
                    <div class="widget">
                        <h3>Developers</h3>
                        <ul>
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">SEO Marketing</a></li>
                            <li><a href="#">Theme</a></li>
                            <li><a href="#">Development</a></li>
                        </ul>
                    </div>    
                </div><!--/.col-md-3-->

       <!--         <div class="col-md-3 col-sm-6">
                    <div class="widget">
                        <h3>Our Partners</h3>
                        <ul>
                            <li><a href="#">Adipisicing Elit</a></li>
                            <li><a href="#">Eiusmod</a></li>
                            <li><a href="#">Tempor</a></li>
                            <li><a href="#">Veniam</a></li>                           
                        </ul>
                    </div>    
      <!--         </div><!--/.col-md-3-->
     <!--       </div>
     <!--    </div>  
    </section><!--/#bottom-->
	<!--
	<div class="top-bar">
		<div class="container">
			<div class="row">
			    <div class="col-lg-12">
				   <div class="social">
						<ul class="social-share">
							<li><a href="#"><i class="fa fa-facebook"></i></a></li>
							<li><a href="#"><i class="fa fa-twitter"></i></a></li>
							<li><a href="#"><i class="fa fa-linkedin"></i></a></li> 
							<li><a href="#"><i class="fa fa-dribbble"></i></a></li>
							<li><a href="#"><i class="fa fa-skype"></i></a></li>
						</ul>
				   </div>
                </div>
			</div>
		</div><!--/.container-->
    <!--</div><!--/.top-bar-->
	<!--
	<footer id="footer" class="midnight-blue">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    &copy; 2015 <a target="_blank" href="http://bootstraptaste.com/" title="Free Twitter Bootstrap WordPress Themes and HTML templates">bootstraptaste</a>. All Rights Reserved.
                </div>
                <div class="col-sm-6">
                    <ul class="pull-right">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Contáctenos</a></li>
                        <li><a href="#">Bios</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer><!--/#footer-->
	
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <!--<script src="js/jquery.js"></script>-->
	
  </body>
</html>