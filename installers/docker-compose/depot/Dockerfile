FROM finos/legend-depot-server:snapshot

COPY entrypoint.sh /app/entrypoint.sh

# Override parent image's CMD to add /config to the top of the Java CLASSPATH
CMD ["/app/entrypoint.sh"]
