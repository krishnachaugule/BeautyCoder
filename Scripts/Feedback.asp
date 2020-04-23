<%
dim fs,f
set fs=Server.CreateObject("Scripting.FileSystemObject")
set f=fs.CreateTextFile("test.txt",false)
f.write("Hello World!")
f.write("How are you today?")
f.close
set f=nothing
set fs=nothing
Response.Redirect("Feedback.html")
%>