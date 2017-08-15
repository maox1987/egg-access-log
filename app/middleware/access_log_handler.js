'use strict'

module.exports = (opts, app) => {
  

  return async (ctx, next) => {
    ctx.ip = ctx.headers['x-forwarded-for'] || ctx.ip || ctx.ips || (ctx.socket && (ctx.socket.remoteAddress || (ctx.socket.socket && ctx.socket.socket.remoteAddress)))
    
    await next()
    
    const status = ctx.response.status || ctx.response.__statusCode || ctx.res.statusCode
   
    const contentLength = (ctx.response._headers && ctx.response._headers['content-length']) ||
      (ctx.response.__headers && ctx.response.__headers['Content-Length']) ||
      ctx.response.length || '-'
    const referrer = ctx.headers.referer || ''
    const userAgent = ctx.headers['user-agent']

    ctx.logger.info(` ${status} ${contentLength} ${referrer} ${userAgent}`)
  }
}

