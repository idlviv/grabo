rd public /s /q
if exist public rd /s /q public
cd frontend
ng build --aot --watch
rem ng build --watch