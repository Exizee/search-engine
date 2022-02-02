$(document).ready(function(){
    $("#b1").click (function(){
        alert($("h1").text())
    })
    $("#b2").click (function(){
        alert($("h1").html())
    })
    $("#btn").click (function(){
        let val = $("#txt").val()

        $("#RC").attr("href",`https://${val}`)
    })
})
